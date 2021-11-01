function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Bad response!");
    }
}


export default class DataService {
    constructor() {    }

    getContent(url) {
        return fetch(url)
            .then(convertToJson)
            .then((data) => {
                console.log(data);
                return data;            
            });
    } 

    async getByCategory(url, category) {
        const content = await this.getContent(url);
        const filtered = content.filter((item) => item.category === category);
        return filtered;
    }

    async getBySlug(url, slug) {
        const content = await this.getContent(url);
        const find = content.find((item) => item.slug === slug);
        return find;
    }

    async getCategoryDetails(url, category) {
        const content = await this.getContent(url);
        return content[category];
    }
};
