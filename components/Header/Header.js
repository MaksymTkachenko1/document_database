class Header {
    handlerOpenShoppingCartPage() {
        shoppingCartPage.render();
    }

    render(count) {
        const html = `
        <div class="header-container">
        <div id="searchBox">
            <input type="text" id="input" placeholder="Поиск книг">
            <input type="button" id="searchBtn" value="Поиск" onclick="search();">
        </div>
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingCartPage();">
            🛒 КОРЗИНА ${count}
            </div>
        </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const array = ["Грокаем алгоритмы. Адитья Бхаргава", "Код. Чарльз Петцольд", "Совершенный код. Стив Макконнелл",
    "Чистая архитектура. Роберт Мартин", "Чистый код. Роберт Мартин", "Тестирование DOT COM. Роман Савин.",
    "CLR via С#. Джеффри Рихтер", "Паттерны проектирования. Эрик Фримен", "Рефакторинг. Мартин Фаулер",
    "Замыкания и Объекты. Кайл Симпсон"];

window.addEventListener("keydown", event => {
    if (event.keyCode === 13) { search(); }
});

function search() {
    let input = document.getElementById("input"); 

    const lowerCaseArray = array.map(element => {
        return element.toLowerCase();
    });

    let substring = input.value.toLowerCase();
    const matches = lowerCaseArray.filter(element => {
        if (element.indexOf(substring) !== -1 && substring.length !== 0) {
            return true;
        }
    });
    console.log(matches);
    if (matches.length === 0) {
        alert("Нет совпадений поиска");
    } else {
        alert(`Есть совпадение поиска: ${matches}`);
    }
}

