function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('https://api.jsonbin.io/b/6262a7bebc312b30ebeb5dda'
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



  