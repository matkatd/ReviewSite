function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Bad response!");
  }
}

const baseUrl = "https://precipice-ponderings-default-rtdb.firebaseio.com/";

export default class DataService {
  constructor() {}
  /** Gets content from json file */
  getContent(url) {
    return fetch(url)
      .then(convertToJson)
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  async postCategory(url) {
    // Checking to see if firebase write rules are secure
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        posting: {
          img: "images/hikingPano_2500.jpg",
          alt: "Attempt to post",
          description: "If rules are right, this should be rejected",
        },
      }),
    };
    const content = await fetch(baseUrl + url, options).then(convertToJson);
    console.log(content);
  }

  /** Returns data filtered by category of review */
  async getByCategory(url, category) {
    const content = await this.getContent(
      baseUrl + url + `?orderBy="category"&equalTo="${category}"`
    );
    //const filtered = content.filter((item) => item.category === category);
    return [...Object.values(content)];
  }
  /** Returns data attached to object with given slug */
  async getBySlug(url, slug) {
    const content = await this.getContent(baseUrl + url);
    const find = content.find((item) => item.slug === slug);
    return find;
  }

  /** Returns object with given category */
  async getCategoryDetails(url, category) {
    const content = await this.getContent(baseUrl + url);
    return content[category];
  }
}
