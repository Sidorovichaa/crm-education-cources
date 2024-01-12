class TestData {
    constructor(studentName, phone, email, course) {
        this.studentName = studentName,
            this.phone = phone,
            this.email = email,
            this.course = course
    }
}

export default function getTestData() {
    const testData = [
        new TestData('Ivan Rogozin', '+375295678892', 'rogozin@gmail.com', 'course-html'),
        new TestData('Natalya Osmolovskaya', '+375334526732', 'nosmol@gmail.com', 'course-js'),
        new TestData('Olga Reshetova', '+375295678892', 'reshetova@gmail.com', 'course-html'),
        new TestData('Maxim Kovovalov', '+375299876132', 'konovalov@gmail.com', 'course-vue'),
        new TestData('Oleg Barok', '+375295678892', 'barok@gmail.com', 'course-php'),
        new TestData('Nikita Druzin', '+375335647865', 'druzin@gmail.com', 'course-wordpress'),
        new TestData('Irina Lukina', '+375295675467', 'lukina@gmail.com', 'course-js'),
        new TestData('Dmitry Potapov', '+375294356782', 'potapovn@gmail.com', 'course-js'),
        new TestData('Daria Lipinskaya', '+375295673891', 'lipinskaya@gmail.com', 'course-html'),
        new TestData('Elena Bertosh', '+375294363252', 'bertosh@gmail.com', 'course-vue'),
        new TestData('Vlad Daglis', '+375297698365', 'daglis@gmail.com', 'course-php'),
    ];


    let index = Math.floor(Math.random() * testData.length);
    return testData[index];
}



