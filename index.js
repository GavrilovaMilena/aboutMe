// Appearance of text when scrolling the page
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.title-text');
for (let elm of elements) {
    observer.observe(elm);
}


// Scroll up button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////////////////////////////////////////////// СМЕНА ТЕМЫ

// Помещаем кнопки смены темы в переменную
let btn = document.querySelectorAll('.theme');

btn.forEach(button => {
    // К каждой добавляем обработчик событий на клик
    button.addEventListener('click', function () {
        // Помещаем в переменную название темы из атрибута data-theme
        let theme = this.dataset.theme;
        // Вызываем функцию, которая меняет тему и передаем в нее её название
        applyTheme(theme);
    });
});
function applyTheme(themeName) {
    // Помещаем путь к файлу темы в пустой link в head
    document.querySelector('[title="theme"]').setAttribute('href', `${themeName}-theme.css`);
    btn.forEach(button => {
        // Показываем все кнопки смены темы
        button.style.display = 'block';
    });
    // Но скрываем кнопку для активной темы
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}
// Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.
let activeTheme = localStorage.getItem('theme');
// Если значение не записано, или оно равно 'light' - применяем светлую тему
if (activeTheme === null || activeTheme === 'light') {
    applyTheme('light');
    // Если значение равно 'dark' - применяем темную
} else if (activeTheme === 'dark') {
    applyTheme('dark');
}
/////////////////////////////////////////////////////////////////////////////////////////////


// // Add a change theme button
// const btn = document.querySelector('.theme');
// // Выбор таблицы стилей
// const theme = document.querySelector("#light-theme");
// // Отслеживаем щелчок по кнопке
// btn.addEventListener("click", function () {
//     // If the current address contains "light-theme.css"
//     if (theme.getAttribute("href") === "light-theme.css") {
//         // ...then we switch to "dark-theme.css"
//         theme.href = "dark-theme.css";
//         localStorage.setItem("myKey", JSON.stringify(theme));
//         // Otherwise…
//     } else {
//         // …switch to "light-theme.css"
//         theme.href = "light-theme.css";
//         localStorage.setItem("myKey", JSON.stringify(theme));
//     }
// });


function viewDiv() {
    document.getElementById("i-can").style.display = "block";
}