const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const daftarBtn = dcoument.querySelector("label.daftar");
const daftarLink = document.querySelector("form .daftar-link a");
daftarBtn.onclick = (()=>{
    loginForm.style.marginleft = "-50%";
    loginText.style.marginleft = "-50%";
});
loginBtn.onclick = (()=>{
    loginForm.style.marginleft = "0%";
    loginText.style.marginleft = "0%";
});
daftarLink.onclick = (()=>{
    daftarBtn.click();
    return false;
});