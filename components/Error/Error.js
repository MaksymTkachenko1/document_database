class Error {
    render() {
        const html = `
        <div class="error-container">
            <div class="error-message">
                <h3>Ошибка. Не удалось получить данные.</h3>
            </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();