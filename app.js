
function loadPage(pageUrl){
    const contentContainer = document.getElementById('content');

    //Fetch the content of the specified HTML page
    fetch(pageUrl)
        .then(reponse=> reponse.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => console.error('Error fetching page: ', error));
}