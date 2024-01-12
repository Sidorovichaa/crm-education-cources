const elements = {
    form: document.querySelector('#form'),
    studentName: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    course: document.querySelector('#product')
};

function renderTestData(testData) {
    elements.studentName.value = testData.studentName;
    elements.phone.value = testData.phone;
    elements.email.value = testData.email;
    elements.course.value = testData.course;
};


function getFormInput() {
    return new FormData(elements.form);
};

export {
    elements,
    renderTestData,
    getFormInput
}