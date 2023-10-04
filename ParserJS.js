const puppeteer = require('puppeteer');

class MyScraper {
    constructor() {
        this.browser = null;
        this.page = null;
    }

    async initialize() {
        // Запуск браузера
        this.browser = await puppeteer.launch();
        // Створення нової сторінки
        this.page = await this.browser.newPage();
    }

    async scrape(url) {
        try {
            // Перейти на заданий URL
            await this.page.goto(url);
            const pageTitle = await this.page.title();
            console.log('Заголовок сторінки:', pageTitle);

            // Ваш код для парсингу інших даних

        } catch (error) {
            console.error('Помилка при парсингу:', error);
        }
    }

    async close() {
        // Закрити браузер після завершення парсингу
        await this.browser.close();
    }
}

// Приклад використання парсера
(async () => {
    const myScraper = new MyScraper();

    try {
        await myScraper.initialize();

        // Виклик функції парсингу з URL
        await myScraper.scrape('https://example.com');

        // Якщо потрібно парсити інші сторінки, викликайте scrape() з іншими URL

    } finally {
        // Закрити браузер після завершення парсингу
        await myScraper.close();
    }
})();
