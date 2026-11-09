document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const articles = document.querySelectorAll('.article-view');
    const cards = document.querySelectorAll('.card');
    const backButtons = document.querySelectorAll('.back-btn');

    function hideAllArticles() {
        articles.forEach(a => a.hidden = true);
    }

    function openArticle(id) {
        hideAllArticles();
        mainContent.hidden = true;
        const article = document.getElementById(id);
        if (!article) return;
        article.hidden = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closeArticles() {
        hideAllArticles();
        mainContent.hidden = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Карточки: клик + клавиатура
    cards.forEach(card => {
        const id = card.dataset.article;

        card.addEventListener('click', () => openArticle(id));

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openArticle(id);
            }
        });
    });

    // Кнопки «Назад»
    backButtons.forEach(btn => btn.addEventListener('click', closeArticles));
});
