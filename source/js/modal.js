const modalOpenBtn = document.querySelectorAll("[data-modal-open]");
let modalCloseBtn,
    modal;


modalOpenBtn.forEach(btnItem => btnItem.addEventListener(`click`, openPopup));

function openPopup(evt) {
    evt.preventDefault();
    let dataPopup = this.dataset.modalOpen;

    modal = document.querySelector(`#modal-${dataPopup}`);
    modal.classList.add("modal--active");
    closePopup(modal);
}

function closePopup(modal) {
    modalCloseBtn = modal.querySelector("[data-modal-close]");

    modalCloseBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.remove("modal--active");
    });

}

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal--active")) {
            evt.preventDefault();
            modal.classList.remove("modal--active");
        }
    }
});
