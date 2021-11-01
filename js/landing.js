import DataService from "./dataService.js";
import utils from "./utils.js"
const myDataService = new DataService;

function buildPage(data, category) {
    document.querySelector("#activityName").textContent = category;
    const main = document.querySelector("main");
    main.innerHTML += data.map((e) => buildThumbnail(e)).join("");
}

function buildThumbnail(data) {
    return `<div class="thumbnail">
    <a href="review.html?slug=${data.slug}">
      <img src="${data.image}" />
      <h3 class="">${data.title}</h3>
      <p>${data.date}</p>
    </a>
  </div>`
}

window.addEventListener("load", async function() {
    const category = utils.getParams("category");

    const allArticles = await myDataService.getByCategory("js/post.json", category);

    buildPage(allArticles, category);
});