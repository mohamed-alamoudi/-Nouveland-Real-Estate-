document.getElementById("btn_navbar").addEventListener("click", function () {
    document.getElementById("btn_navbar_active").classList.toggle("active");
});
function countUp(element) {
    const target = +element.getAttribute('data-target');
    let count = 1;

    const interval = setInterval(() => {
        element.textContent = count;
        count++;
        if (count > target) {
            clearInterval(interval);
        }
    }, 0.5);
}

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countUp(entry.target);
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});
const dropdown = document.getElementById('myDropdown');