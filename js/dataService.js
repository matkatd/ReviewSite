function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Bad response!");
    }
}

const baseUrl = "https://precipice-ponderings-default-rtdb.firebaseio.com/"

export default class DataService {
    constructor() {    }
    /** Gets content from json file */
    getContent(url) {
        return fetch(url)
            .then(convertToJson)
            .then((data) => {
                console.log(data);
                return data;            
            });
    } 

    /** Returns data filtered by category of review */
    async getByCategory(url, category) {
        const content = await this.getContent(url);
        const filtered = content.filter((item) => item.category === category);
        return filtered;
    }
    /** Returns data attached to object with given slug */
    async getBySlug(url, slug) {
        const content = await this.getContent(url);
        const find = content.find((item) => item.slug === slug);
        return find;
    }

    /** Returns object with given category */
    async getCategoryDetails(url, category) {
        const content = await this.getContent(url);
        return content[category];
    }
};
