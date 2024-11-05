/**
*   Vytvorí nový li element s buttonom "vymaž"
*
*   @param {HTMLElement} container
*   @param {String} text
*/

function createNewCard(container, text) {
    let newCard = document.createElement('li');
    
    newCard.classList.add('animate__animated', 'animate__backInUp', 'animate__faster');

    newCard.innerHTML = `
        <p>${text}</p>
        <button class="remove">Vymazať</button>
    `;

    newCard.querySelector('.remove').addEventListener('click', () => {
        newCard.remove();
    });

    container.prepend(newCard);
};