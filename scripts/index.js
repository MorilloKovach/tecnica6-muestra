document.getElementById('body').addEventListener('click', (e) => {
  if (e.target.tagName == 'I') {
    document.querySelectorAll('.menu').forEach(ele => {
      ele.classList.toggle('open')
    })
    if (e.target.nextElementSibling.firstElementChild.firstElementChild.classList[1] == "borrar") {
      setTimeout(() => {
        document.querySelectorAll('.logo-tecnica').forEach(ele => {
          ele.classList.toggle('borrar')
        })
      },250)
    }
    else {
      document.querySelectorAll('.logo-tecnica').forEach(ele => {
        ele.classList.toggle('borrar')
      })
    }
  }
})
let activeIndex = 0;
const items = document.querySelectorAll(".item");
function showItem(index) {
  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");
}
setInterval(() => {
  activeIndex = (activeIndex + 1) % items.length;
  showItem(activeIndex);
}, 4500)


