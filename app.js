const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0 0 -50px 0'
};

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }       
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Project fade in
/*
let options = {
    threshold: 0.1,
};

const proj = document.getElementsByClassName("project-container");
const x = document.getElementsByClassName("intro");


let projectObserver = new IntersectionObserver(callback, options);

projectObserver.observe(proj);

let callback = (entries, projectObserver) => {
    entries.forEach((entry) => {
        if (projectObserver.observe(entry)) {
            entry.target.classList.add('show');
        };
    });
};
/*