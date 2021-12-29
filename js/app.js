const OPEN_MODAL = document.querySelector('.section-hero__btn');
const CLOSE_MODAL = document.querySelector('.close-modal-btn');
const MODAL = document.querySelector('.modal-bg');

OPEN_MODAL.addEventListener('click', toggleModal);
CLOSE_MODAL.addEventListener('click', toggleModal);

function toggleModal() {
    MODAL.classList.toggle('is-hidden');
}
