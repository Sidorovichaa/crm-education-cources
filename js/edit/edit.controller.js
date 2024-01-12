import * as model from './../model.js';
import * as view from "./edit.view.js";

function init() {
    const id = new URLSearchParams(window.location.search).get('id');
    const request = model.getElementByID(id);
    view.renderRequest(request);
    setupEventListeners();

}

init();

function setupEventListeners() {
    view.elements.form.addEventListener('submit', formSubmitHandler);

}

function formSubmitHandler(e) {
    e.preventDefault();
    const formData = view.getFormInput();
    model.updateRequest(formData);
    window.location = './table.html'
}