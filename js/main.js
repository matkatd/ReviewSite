import utils from "./utils.js";
import DataService from "./dataService.js";
const { clickMenu } = utils;
const myDataService = new DataService();

/** Dynamically builds a review thumbnail row */
function buildPage(data) {
  const section = document.querySelector("#thumbnailGrid");

  section.innerHTML += data.map((e) => buildThumbnail(e)).join("");
}

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
  const data = await myDataService.getByContent("content.json");

  console.log(data.slice(0, 3));
  if (data.length > 3) {
    buildPage(data.slice(0, 3));
  } else {
    buildPage(data);
  }
});

const menu = document.querySelector("#topics"); // makes dropdown menu clickable
clickMenu(menu);
