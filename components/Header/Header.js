class Header {
    handlerOpenShoppingCartPage() {
        shoppingCartPage.render();
    }

    render(count) {
        const html = `
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingCartPage();">
            🛒 КОРЗИНА ${count}
            </div>
        </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
