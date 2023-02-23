function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('https://api.npoint.io/0684e7282173afb1b456'
).then(response => response.json())
    .then(data => {
    CATALOG = data;
    spinnerPage.handleClear();
    render();
})
.catch(() => {
    spinnerPage.handleClear();
    errorPage.render();
});



  