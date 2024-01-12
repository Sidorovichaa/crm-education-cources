import * as model from './../model.js';
import * as view from './form.view.js';
import getTestData from './form.test-data.js';

//Рендерим тестовые данные на страницу
init();



/*===========Functions=========*/
function init() {
    const testData = getTestData();
    view.renderTestData(testData);
    addEventListeners();
}

function addEventListeners() {
    view.elements.form.addEventListener('submit', createRecord);
};

function createRecord(e) {
    e.preventDefault();
    const formData = view.getFormInput();
    model.addRequest(formData);

    const testData = getTestData();
    view.renderTestData(testData);
}