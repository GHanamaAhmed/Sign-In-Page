let eye=document.querySelectorAll(".icon-eye")
let inputPassword=document.getElementById("inputPassword")
eye[1].addEventListener("click",()=>{
    inputPassword.type="password"
    eye[0].classList.remove("d-none")
    eye[1].classList.add("d-none")
})
eye[0].addEventListener("click",()=>{
    inputPassword.type="text"
    eye[1].classList.remove("d-none")
    eye[0].classList.add("d-none")
})