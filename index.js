function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('https://api.npoint.io/066819cc9430e03729e8'
).then(response => response.json())
    .then(data => {
    console.log(data)
    CATALOG = data;
    spinnerPage.handleClear();
    render();
})
.catch(() => {
    spinnerPage.handleClear();
    errorPage.render();
});

  