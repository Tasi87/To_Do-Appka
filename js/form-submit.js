const form = document.querySelector('form');
const inputText = form.querySelector('input[name=text]');
const cardContainer = document.querySelector('.cards ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!inputText.value.trim()) return;

    createNewItem(
        cardContainer,
        inputText.value
    );

    inputText.value = '';

    inputText.focus();
});