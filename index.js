function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('https://api.jsonserve.com/x-7hyF')
    .then(result => result.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleClear();
        render();
        spinnerPage.handleClear();
        render();
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });