const link = document.getElementsByClassName(".marcarhora")
const accordions = document.querySelectorAll(".accordion")

function marcarhorario(){
    window.location.href = "https://api.whatsapp.com/send?phone=5511967164004&text=Ola%20Gostaria%20De%20Marcar%20um%20Horario!%20"
}

accordions.forEach(accordion =>{
    accordion.addEventListener("click", () =>{
        const body = accordion.querySelector(".accordion-body")
        body.classList.toggle("active")
    })
})

