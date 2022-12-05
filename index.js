function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.title-text');
for (let elm of elements) {
    observer.observe(elm);
}


// Scroll up button
window.onscroll = function() {scrollFunction()};

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

// Add button
const btn = document.querySelector('.theme');
// Choosing a style sheet
const theme = document.querySelector("#light-theme");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
    // If the current address contains "index.css"
    if (theme.getAttribute("href") === "index.css") {
        // ...then we switch to "dark-theme.css"
        theme.href = "dark-theme.css";
        // Otherwise…
    } else {
        // …switch to "index.css"
        theme.href = "index.css";
    }
});

// function viewDiv(){
//     document.getElementById("i-can").style.display = "block";
// };