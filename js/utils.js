function getParams(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
}

function titleCase(string) {
    return string[0].toUpperCase() + string.substr(1).toLowerCase()
}
export default 
{
    getParams,
    titleCase
};