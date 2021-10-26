function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Bad response!");
    }
}

function getContent(url) {
    fetch(url)
        .then(convertToJson)
        .then((data) => {
            console.log(data);

            
        });
}