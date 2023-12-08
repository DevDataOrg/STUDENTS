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
            surName: "Петров1",
            name: "Петя1",
            middleName: "Петрович1",
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

    //получим из нашего массива studentsList все обьекты
    function iterateObjectsInArray(array) {
        for (const obj of array) {
            // console.log(obj);
            fullname = obj.surName + obj.name + obj.middleName;
            console.log(fullname);
        }
    }

    iterateObjectsInArray(studentsList);
    // console.log(ttt);

    function getStudentItem(studentObj) {
        const studentRow = document.createElement('tr');

        const fullNameTd = document.createElement('td');
        const facultyTd = document.createElement('td');
        const dateOfBirthTd = document.createElement('td');
        const yearsOfStudyTd = document.createElement('td');

        fullNameTd.textContent = `${studentObj.surName} + ${studentObj.name} + ${studentObj.middleName}`; //функция
        facultyTd.textContent = studentObj.faculty;
        dateOfBirthTd.textContent = `${studentObj.birthDate} ${studentObj.birthDate} лет)`; //функция
        yearsOfStudyTd.textContent = `${studentObj.studyStart}`; //функция

        studentRow.append(
            fullNameTd,
            facultyTd,
            dateOfBirthTd,
            yearsOfStudyTd
        );
        return studentRow; //tr
    }

    function addRowInTable (arrDefault) {
        const tableBody = document.querySelector('tbody');
        // tableBody.innerHTML = '';
        for (item of arrDefault) {
            let rowResult = getStudentItem(item);
            tableBody.append(rowResult);  
        }
    }

    addRowInTable(studentsList);
  

})();