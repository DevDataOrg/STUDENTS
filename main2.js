// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.
(function () {

    const studentsList = [
        // Добавьте сюда объекты студентов
        {
            surName: "Петров",
            name: "Петя",
            middleName: "Петрович",
            birthDate: "01-11-1983",
            faculty: "Физкультура",
            studyStart: 2015
        },
        {
            surName: "Петров",
            name: "Петя",
            middleName: "Петрович",
            birthDate: "01-11-1983",
            faculty: "Физкультура",
            studyStart: 2015
        }
    ]

    function addStudents() {
        let surName = document.querySelector(".surNameInput");
        let name = document.querySelector(".nameInput");
        let middleName = document.querySelector(".middleNameInput");
        let birthDate = document.querySelector(".birthDateInput");
        let faculty = document.querySelector(".facultyInput");
        let studyStart = document.querySelector(".studyStartInput");
        let button = document.querySelector(".btnAddStudents");

        button.addEventListener('click', function () {
            studentsList.push({
                surName: surName.value,
                name: name.value,
                middleName: middleName.value,
                birthDate: birthDate.value,
                faculty: faculty.value,
                studyStart: studyStart.value
            });
            console.log(studentsList);
        });
    }
    addStudents();

    // Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

    function getStudentItem(studentObj) {
        const studentRow = document.createElement('tr');

        const fullNameTd = document.createElement('td');
        const facultyTd = document.createElement('td');
        const dateOfBirthTd = document.createElement('td');
        const yearsOfStudyTd = document.createElement('td');

        fullNameTd.textContent = formatFullName(studentObj); //функция
        facultyTd.textContent = studentObj.faculty;
        dateOfBirthTd.textContent = `${formatTime(studentObj.birthDate)} (${getStudentAge(studentObj.birthDate)} лет)`; //функция
        yearsOfStudyTd.textContent = formatYearsOfStudy(studentObj); //функция

        studentRow.append(
            fullNameTd,
            facultyTd,
            dateOfBirthTd,
            yearsOfStudyTd
        );

        return studentRow; //tr
    }

    // getStudentItem(studentsList);

    function formatFullName(studentObj) {
        return `${studentObj.surName} ${studentObj.name} ${studentObj.middleName}`;
    }

    function formatTime(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

        return formattedDate;
    }

    // вычисление возраста, курса и форматирование времени
    function getStudentAge(birthDate) {
        const now = new Date();

        const age = now.getFullYear() - birthDate.getFullYear();

        if (
            now.getMonth() < birthDate.getMonth() ||
            (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
        ) {
            return age - 1;
        }

        return age;
    }

    function formatYearsOfStudy(studentObj) {
        return `${studentObj.studyStart} - ${Number(studentObj.studyStart) + 4} ${formatStudentCourse(studentObj.startOfStudying)}`;
    }

    function formatStudentCourse(studyingDate) {
        if (Number(studyingDate) <= 2019) {
            return '(Закончил)';
        }
        return `(${2023 - Number(studyingDate) + 1} курс)`;
    }

    // Отрисовка внутреннего содержания таблицы
    function renderStudentsTable(studentsArray) {
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';
    
        studentsArray.forEach(student => {
            const studentRow = createStudentRow(student);
            tableBody.append(studentRow);
        });
    }

})();





// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {

}

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.