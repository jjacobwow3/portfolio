const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }       
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/*
let options = {
    threshold: 0.1,
};

const proj = document.getElementsByClassName("project-container");

let projectObserver = new IntersectionObserver(callback, options);

projectObserver.observe(proj);

let callback = (entries, projectObserver) => {
    entries.forEach((entry) => {
        if (projectObserver.observe(entry)) {
            entry.target.classList.add('show');
        };
    });
};
*/