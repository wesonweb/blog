const { html } = require('common-tags')

function Card({
                title, imageUrl, alt, linkPrimary, linkSecondary, linkTerciary, linkTextPrimary, linkTextSecondary,linkTextTerciary, description
            }) {
            return html`
                <div class="card__container">
                    <div class="card__header">
                        <img src="${imageUrl}" alt="${alt}" class="card__image">
                        <h2 class="card__title">${title}</h2>
                    </h2>
                    <div class="card__content">
                        <p class="card__description">${description}</p>
                    </div>
                    <div class="card__footer">
                        <a href="${linkPrimary}" class="card__link--primary">${linkTextPrimary}</a>
                        <a href="${linkSecondary}" class="card__link--secondary">${linkTextSecondary}</a>
                        <a href="${linkTerciary}" class="card__link--secondary">${linkTextTerciary}</a>
                    </div>
                </div>
                `
}

module.exports = Card
