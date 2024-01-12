const elements = {
    form: document.querySelector('#form'),
    number: document.querySelector('#number'),
    id: document.querySelector('#id'),
    date: document.querySelector('#date'),
    course: document.querySelector('#product'),
    studentName: document.querySelector('#name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    status: document.querySelector('#status'),
}



function renderRequest(request) {
    elements.number.innerText = request.id;
    elements.id.value = request.id;
    elements.date.innerText = `${new Date(request.date).toLocaleDateString()} ${new Date(request.date).toLocaleTimeString()} `;
    elements.course.value = request.course;
    elements.studentName.value = request.studentName;
    elements.email.value = request.email;
    elements.phone.value = request.phone;
    elements.status.value = request.status;
}

function getFormInput() {
    return new FormData(elements.form);
}

export { elements, renderRequest, getFormInput }
