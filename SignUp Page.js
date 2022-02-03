const tutor_btn = document.querySelector('#tutor-button');
const member_btn = document.querySelector('#member-button');
const container = document.querySelector('.container');

member_btn.addEventListener('click', () => {
    container.classList.add('member-mode');
});

tutor_btn.addEventListener('click', () => {
    container.classList.remove('member-mode');
});
