/** Returns URL search params */
function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}
/** Returns string as title case */
function titleCase(string) {
  return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

function clickMenu(selector) {
  selector.addEventListener("touchend", function (e) {
    //add event listener not working
    e.preventDefault();
    const menuItem = document.querySelector("#topics-menu");
    menuItem.classList.toggle("open");
  });

  selector.addEventListener("click", function () {
    const menuItem = document.querySelector("#topics-menu");
    menuItem.classList.toggle("open");
  });
}
export default {
  clickMenu,
  getParams,
  titleCase,
};
