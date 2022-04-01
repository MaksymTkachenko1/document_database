class Error {
    render() {
        const html = `
        <div class="error-container">
            <div class="error-message">
                <h3>Технические работы.</h3>
                <p>Приносим извинения за неудобства.</p>
            </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error;