import DataService from "./dataService.js";
import utils from "./utils.js"
const myDataService = new DataService;

/** Dynamically builds a review landing page */
function buildPage(data, category, categoryData) {
    document.querySelector("#activityName").textContent = category;
    // document.querySelector(".description").textContent = categoryData.description;
    document.querySelector("#landingHero").src = categoryData.img;
    document.querySelector("#landingHero").alt = categoryData.alt;
    const section = document.querySelector("#thumbnailGrid");

    section.innerHTML += data.map((e) => buildThumbnail(e)).join("");
}

/** Builds a thumbnail for every review in post.json */
function buildThumbnail(data) {
    return `<div class="thumbnail">
    <a href="review.html?slug=${data.slug}">
      <img src="${data.image}" />
      <div>
      <h3 class="">${data.title}</h3>
      <p>${data.date}</p>
      </div>
    </a>
  </div>`
}

window.addEventListener("load", async function() {
    const category = utils.getParams("category");

    const allArticles = await myDataService.getByCategory("js/post.json", category);
    const aCategory = await myDataService.getCategoryDetails("js/categories.json", category);
    buildPage(allArticles, category, aCategory);
});