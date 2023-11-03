localStorage.setItem("confirmacion","false")
if(localStorage.getItem('confirmacion') == "true"){
    Swal.fire({
        icon:'success',
        title:'Envío',
        text:'Se envío con éxito'
    })
    setTimeout(() => {
        localStorage.setItem("confirmacion","false");
    },50000)
    
}
else{
    document.getElementById('segment').addEventListener('click', () => {
        localStorage.setItem("confirmacion","true");
    })
}

document.getElementById('body').addEventListener('click', (e) => {
    if (e.target.tagName == 'I') {
        document.getElementsByClassName('menu')[0].classList.toggle('open');
        if (e.target.nextElementSibling.firstElementChild.firstElementChild.classList[1] == "borrar") {
            setTimeout(() => {
                document.getElementsByClassName('logo-tecnica')[0].classList.toggle('borrar')
            }, 250)

        }
        else {
            document.getElementsByClassName('logo-tecnica')[0].classList.toggle('borrar')
        }
    }
})