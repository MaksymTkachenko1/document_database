class ShoppingCart {
    handleClear() {
        ROOT_SHOPPING_CART.innerHTML = '';
    }

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-cart-element__name">⚡️ ${name}</td>
                        <td class="shopping-cart-element__price">${price.toString()} грн</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-cart-container">
                <div class="shopping-cart__close" onclick="shoppingCartPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-cart-element__name">💥 Сумма:</td>
                        <td class="shopping-cart-element__price">${sumCatalog.toString()} грн</td>
                    </tr>
                </table>
                <button class="btn1" onclick="document.location='https://ordering-it-books.netlify.app'">Оформить заказ</button>
            </div>
        `;
        ROOT_SHOPPING_CART.innerHTML = html;
    }
}

const shoppingCartPage = new ShoppingCart();