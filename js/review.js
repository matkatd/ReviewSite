import DataService from "./dataService.js"
import utils from "./utils.js"
const myDataService = new DataService;
 /** Dynamically builds a product review based on data in post.json */
function buildReview(data) {
    document.querySelector("#gearName").textContent = data.title;
    document.querySelector("#authorName").textContent = data.author;
    document.querySelector("#date").textContent = data.date;
    document.querySelector("#mainArticle > img").src = data.image;
    document.querySelector("#mainArticle > img").alt = data.alt;
    const section = document.querySelector("#mainArticle > section");
    data.content.forEach(element => {
        section.appendChild(buildSection(element));
    });
}

/** Builds a section of an article, 
 * consisting of a headline and one or more paragraphs */
function buildSection(data) {
    const newSection = document.createElement("section");
    newSection.innerHTML = `<h2>${data.sectionHeadline}</h2>`;
    const paraHTML = data.paragraphs.map((p) => `<p>${p}</p>`);
    newSection.innerHTML += paraHTML.join("");
    return newSection;
}

window.addEventListener("load", async function() {

    const slug = utils.getParams("slug");
    console.log(slug);

    const selectArticle = await myDataService.getBySlug("js/post.json", slug);
    buildReview(selectArticle);
});