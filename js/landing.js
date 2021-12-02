import DataService from "./dataService.js";
import utils from "./utils.js";
const { getParams, clickMenu } = utils;
const myDataService = new DataService();

function generateSrcset(imgArray) {
  // if (typeof imgArray === "array") {
  const newArray = imgArray.map((image) => `${image.src} ${image.width}w`);
  return newArray.join();
  // } else return " ";
}

/** Dynamically builds a review landing page */
function buildPage(data, category, categoryData) {
  document.querySelector("#activityName").textContent = category;
  document.querySelector(".description").textContent = categoryData.description;
  document.querySelector("#landingHero").src = categoryData.img[0].src;
  document.querySelector("#landingHero").srcset = generateSrcset(
    categoryData.img
  );
  document.querySelector("#landingHero").alt = categoryData.alt;
  const section = document.querySelector("#thumbnailGrid");

  section.innerHTML += data.map((e) => buildThumbnail(e)).join("");
}

/** Builds a thumbnail for every review in post.json */
function buildThumbnail(data) {
  return `<div class="thumbnail">
    <a href="review.html?slug=${data.slug}">
      <img src="${data.image}" alt="${data.alt}"/>
      <div>
      <h3 class="">${data.title}</h3>
      <p>${data.date}</p>
      </div>
    </a>
  </div>`;
}

window.addEventListener("load", async function () {
  const category = getParams("category");

  const allArticles = await myDataService.getByCategory(
    "content.json",
    category
  );
  const aCategory = await myDataService.getCategoryDetails(
    "categories.json",
    category
  );
  // myDataService.postCategory("categories.json");
  buildPage(allArticles, category, aCategory);
});
const menu = document.querySelector("#topics");
clickMenu(menu);
