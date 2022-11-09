document.getElementById('fname').value

const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updatefile);

function updatefile() {
    if (button.value === 'Start machine') {
        button.value = 'Stop machine';
        paragraph.textContent = 'The machine has started!';
    } else {
        button.value = 'Start machine';
        paragraph.textContent = 'The machine is stopped.';
    }
}
