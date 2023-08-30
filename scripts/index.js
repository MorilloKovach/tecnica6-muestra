/*document.getElementById('barra-menu').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('mostrar-menu')
})

document.getElementById('body').addEventListener('click', (e) => {
    if (e.target.tagName != "I" && e.target.tagName != "NAV") {
        document.getElementById('menu').classList.remove('mostrar-menu');
    }
})
*/
document.getElementById('body').addEventListener('click', (e) => {
    if (e.target.tagName == 'I'){
        document.getElementsByClassName('menu')[0].classList.toggle('open');
        document.getElementsByClassName('menu')[1].classList.toggle('open');
        document.getElementsByClassName('menu')[2].classList.toggle('open');
        document.getElementsByClassName('logo-tecnica')[0].classList.toggle('borrar')
        document.getElementsByClassName('logo-tecnica')[1].classList.toggle('borrar')
        document.getElementsByClassName('logo-tecnica')[2].classList.toggle('borrar')
    }
})
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let activeIndex = 0;
const items = document.querySelectorAll(".item");
function showItem(index) {
    items.forEach(item => item.classList.remove("active"));
    items[index].classList.add("active");
}
document.addEventListener("DOMContentLoaded", function() {
    next.addEventListener("click", function() {
      activeIndex = (activeIndex + 1) % items.length;
      showItem(activeIndex);
    });
  
    prev.addEventListener("click", function() {
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      showItem(activeIndex);
    });
    setInterval(nextItem, 3000);
  });

  setInterval(() => {
    activeIndex = (activeIndex + 1) % items.length;
    showItem(activeIndex);
  },3000)


