let requests = getRequestsLS();
const filter = getFilterLS();

class Request {
    constructor(id, studentName, phone, email, course) {
        this.id = id,
            this.studentName = studentName,
            this.phone = phone,
            this.email = email,
            this.course = course,
            this.date = new Date().toISOString(),
            this.status = 'new'
    }
}

const courses = {
    "course-html": "Курс по верстке",
    "course-js": "Курс по JavaScript",
    "course-vue": "Курс по VUE JS",
    "course-php": "Курс по PHP",
    "course-wordpress": "Курс по WordPress"
}

const statuses = {
    "new": "Новая",
    "inwork": "В работе",
    "complete": "Завершена"
}

function getFilterLS() {
    let filter = {
        courses: 'all',
        status: 'all'
    }

    if (localStorage.getItem('filter')) {
        filter = JSON.parse(localStorage.getItem('filter'));
    }
    return filter;
}

function getFilter() {
    return { ...filter }
}

function getRequestsLS() {
    const data = localStorage.getItem('requests');

    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

function addRequest(formData) {
    let id = 1;

    if (requests.length > 0) {
        id = requests[requests.length - 1]['id'] + 1;
    };

    const request = new Request(id, formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('product'))
    requests.push(request);
    localStorage.setItem('requests', JSON.stringify(requests));
}

function getRequests() {
    const filteredRequests = filterRequests(filter);

    return filteredRequests.map((item) => {
        return {
            ...item,
            date: new Date(item.date).toLocaleDateString(),
            courseName: courses[item.course],
            statusName: statuses[item.status]
        }
    });
}

function getElementByID(id) {
    return requests.find((item) => item.id == id);
}

function updateRequest(formData) {
    const request = getElementByID(formData.get('id'));
    request.studentName = formData.get('name');
    request.email = formData.get('email');
    request.phone = formData.get('phone');
    request.course = formData.get('product');
    request.status = formData.get('status');

    localStorage.setItem('requests', JSON.stringify(requests));
}

function changeFilter(prop, value) {
    filter[prop] = value;
    localStorage.setItem('filter', JSON.stringify(filter))
    return filter
}

function filterRequests(filter) {
    let filteredRequests;

    // by course
    if (filter.courses !== 'all') {
        filteredRequests = requests.filter((request) => request.course === filter.courses)
    } else {
        filteredRequests = [...requests]
    };

    // by status
    if (filter.status !== 'all') {
        filteredRequests = filteredRequests.filter((request) => request.status === filter.status)
    };

    return filteredRequests.map((item) => {
        return {
            ...item,
            date: new Date(item.date).toLocaleDateString(),
            courseName: courses[item.course],
            statusName: statuses[item.status]
        }
    });




}

function countNewRequests() {
    const newRequests = requests.filter((item) => item.status === "new");
    return newRequests.length;
}

export { addRequest, getRequests, getElementByID, updateRequest, changeFilter, filterRequests, countNewRequests, getFilter };
