const openModal = document.querySelector('.get_started_btn');
const modalWindow = document.querySelector('.modal_window_wrapper');
const submitBtn = document.querySelector('.submit_btn');

//Открытие модального окна

openModal.addEventListener('click', () => {
    modalWindow.style.display = 'block';
    const createBackDrop = document.createElement('div');
    createBackDrop.classList.add('modal_backdrop');
    document.body.prepend(createBackDrop);
    document.body.classList.add('modal_open');
    // Отключение выделения и Tab 

    document.querySelector('.main').setAttribute('inert', '');
    document.querySelector('.header').setAttribute('inert', '');
    document.querySelector('.footer').setAttribute('inert', '');
});


//закрытие окна при нажатии в пустую область

document.addEventListener('click', (e) => {
    const backDrop = document.querySelector('.modal_backdrop');
    if (e.target === backDrop) {
        modalWindow.style.display = 'none';
        document.body.classList.remove('modal_open');
        backDrop.parentNode.removeChild(backDrop);

        // Возвращаем Tab и выделение обратно

        document.querySelector('.main').removeAttribute('inert');
        document.querySelector('.header').removeAttribute('inert');
        document.querySelector('.footer').removeAttribute('inert');
    }
});

document.addEventListener('keydown', (e) => {
    const backDrop = document.querySelector('.modal_backdrop');
    if (e.code === "Escape") {
        modalWindow.style.display = 'none';
        document.body.classList.remove('modal_open');
        backDrop.parentNode.removeChild(backDrop);

        document.querySelector('.main').removeAttribute('inert');
        document.querySelector('.header').removeAttribute('inert');
        document.querySelector('.footer').removeAttribute('inert');
    }
})


//Отправка формы

submitBtn.addEventListener('click', (e) => {

    let passwordValue = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let inputObj = document.querySelectorAll('.form_input');

    // проверка заполнености полей
    
    if (inputObj.length) {
        inputObj.forEach(item => {
             if (item.value === '') {
                e.preventDefault(); //не даем заполнить форму
                alert('Заполните все поля');
                item.preventDefault(); //завершаем перебор 
             };
        });
    };

    // проверка на совпадение паролей

    if (passwordValue !== confirmPassword) {
        alert('Пароли не совпадают');
        e.preventDefault();
    };

    // проверка длины пароля

    if (passwordValue.length < 8) {
        alert('Минимальная длина пароля: 8 символов');
        e.preventDefault();
    };
})




