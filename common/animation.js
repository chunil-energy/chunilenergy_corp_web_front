const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const animationElements = new Set([
    ...document.querySelectorAll('.animation'),
]);

function observerCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('main_bg')) {
                setTimeout(() => {
                    entry.target.classList.add("Loaded");
                }, 100);
            } else if (entry.target.classList.contains('first')) {
                setTimeout(() => {
                    entry.target.classList.add("Loaded");
                }, 460);
            } else if (entry.target.classList.contains('second')) {
                setTimeout(() => {
                    entry.target.classList.add("Loaded");
                }, 880);
            } else {
                setTimeout(() => {
                    entry.target.classList.add("Loaded");
                }, 1)
            }
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
animationElements.forEach(element => observer.observe(element));