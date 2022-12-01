let timer = 0;
window.addEventListener('load', (event) => {
    let intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () { entry.target.classList.add('up'); }, timer);
                timer += 50;  //chonge
                intersectionObserver.unobserve(entry.target);
                setTimeout(function () { timer = 0; }, 1000)
            }
        });
    });
    document.querySelectorAll('.edu-cointainer').forEach(obj => {
        intersectionObserver.observe(obj);
    });
    document.querySelectorAll('.boxes').forEach(obj1 => {
        intersectionObserver.observe(obj1);
    });
    document.querySelectorAll('.boxess').forEach(obj2 => {
        intersectionObserver.observe(obj2);
    });
    document.querySelectorAll('.cer-cointainer').forEach(obj3 => {
        intersectionObserver.observe(obj3);
    });
});