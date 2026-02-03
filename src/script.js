const observer = new IntersectionObserver((entries) => {
    entries.forEach((ent) => {
        if(ent.isIntersecting) {
            ent.target.classList.replace("animation-disappear", "animation-appear");
        }
    });
});
const scrollElements = document.querySelectorAll('.revealing');
scrollElements.forEach((e) => observer.observe(e));


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li');
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {

            const idDisplaying = entry.target.id;
            const activeNav = document.querySelector(`li:has(a[href="#${idDisplaying}"])`);
            
            if(activeNav){
                //menghapus yang sebelumnya
                navLinks.forEach(nav => {
                    nav.classList.remove('font-bold', 'bg-gray-200');
                });
                
                //menyeleksi kembali mana yang sedang aktif
                activeNav.classList.add('font-bold', 'bg-gray-200');
            }
        }
    })
}, 
{threshold: 0, rootMargin: "-20% 0px -75% 0px"}
);

sections.forEach(s => obs.observe(s));