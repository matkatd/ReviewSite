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
  //   document.querySelector("#activityName").insertAdjacentHTML(
  //     "afterend",
  //     `<img
  //   id="landingHero"
  //   src="${categoryData.img[1].src}"
  //   srcset="${generateSrcset(categoryData.img)}"
  //   sizes=" (min-width: 770px) 1080px, 768px"
  //   alt="${categoryData.alt}"
  // />`
  //   );
  const image = document.createElement("img");
  image.srcset = generateSrcset(categoryData.img);
  image.sizes = `(min-width: 768px) 1080px, 768px`;
  image.src = categoryData.img[1].src;

  image.alt = categoryData.alt;

  document
    .querySelector("#activityName")
    .insertAdjacentElement("afterend", image);

  document.querySelector(".description").textContent = categoryData.description;
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
