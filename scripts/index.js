document.getElementById('body').addEventListener('click', (e) => {
  if (e.target.tagName == 'I') {
    document.querySelectorAll('.menu').forEach(open => {
      open.classList.toggle('open')
    })
    if (e.target.nextElementSibling.firstElementChild.firstElementChild.classList[1] == "borrar") {
      setTimeout(() => {
        document.querySelectorAll('logo-tecnica').forEach(bor => {
          bor.classList.toggle('borrar')
        })
      },250)
      
    }
    else {
      document.querySelectorAll('.logo-tecnica').forEach(bor => {
        bor.classList.toggle('borrar')
      })
    }
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
document.addEventListener("DOMContentLoaded", function () {
  next.addEventListener("click", function () {
    activeIndex = (activeIndex + 1) % items.length;
    showItem(activeIndex);
  });

  prev.addEventListener("click", function () {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    showItem(activeIndex);
  });
  setInterval(nextItem, 3000);
});

setInterval(() => {
  activeIndex = (activeIndex + 1) % items.length;
  showItem(activeIndex);
}, 4500)


