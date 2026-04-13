"use strict";

// #region *** DOM references                           ***********
let htmlZenders, htmlMijnFavorieten, htmlAantalGekozen, htmlBtnSave, htmlModalBody;
let bootstrapModal;
// #endregion

// #region *** Callback-Visualisation - show___         ***********
const showFavorites = (arrNamen) => {
    let htmlString = "";
    for (const naam of arrNamen) {
        htmlString += `<span class="c-fav-item">${naam}</span>`;
    }
    htmlMijnFavorieten.innerHTML = htmlString;
};

const showCheckIfMax = () => {
    const arrAll = Array.from(htmlZenders);
    const arrGekozen = arrAll.filter(cb => cb.checked);
    const arrNietGekozen = arrAll.filter(cb => !cb.checked);

    htmlAantalGekozen.innerHTML = arrGekozen.length;

    // Logica: exact 3
    if (arrGekozen.length >= 3) {
        arrNietGekozen.forEach(cb => cb.disabled = true);
        htmlBtnSave.disabled = false;
    } else {
        arrAll.forEach(cb => cb.disabled = false);
        htmlBtnSave.disabled = true;
    }

    showFavorites(arrGekozen.map(cb => cb.value));
};
// #endregion

// #region *** Callback-No Visualisation - callback___  ***********
const callbackSave = () => {
    const gekozen = Array.from(document.querySelectorAll('.js-zender-check:checked'))
                         .map(cb => cb.value);
    
    const laatste = gekozen.pop();
    const zin = `Je koos voor ${gekozen.join(", ")} en ${laatste}.`;

    console.log(zin);
    htmlModalBody.innerHTML = zin;
    bootstrapModal.show();
};
// #endregion

// #region *** Event Listeners - listenTo___            ***********
const listenToZenders = () => {
    for (const cb of htmlZenders) {
        cb.addEventListener('change', showCheckIfMax);
    }
};

const listenToSave = () => {
    htmlBtnSave.addEventListener('click', callbackSave);
};
// #endregion

// #region *** Init / DOMContentLoaded                  ***********
const init = () => {
    htmlZenders = document.querySelectorAll('.js-zender-check');
    htmlMijnFavorieten = document.querySelector('.js-mijn-favorietjes');
    htmlAantalGekozen = document.querySelector('.js-aantal-gekozen');
    htmlBtnSave = document.querySelector('.js-btn-save');
    htmlModalBody = document.querySelector('.js-modal-body');

    const modalEl = document.querySelector('.js-modal');
    if (modalEl) bootstrapModal = new bootstrap.Modal(modalEl);

    listenToZenders();
    listenToSave();
};

document.addEventListener('DOMContentLoaded', init);
// #endregion