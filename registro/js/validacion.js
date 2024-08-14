function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function comparacionContrasena(password1, password2) {
    return password1 === password2;
}


function verificarContrasena() {
    let password1input = document.getElementById("password1").value;
    let password2input = document.getElementById("password2").value;


    if (comparacionContrasena(password1input, password2input)) {
        alert("Las contraseñas coinciden");
    } else {
        alert("Las contraseñas no coinciden");
    }
}

document.getElementById("regBtn").addEventListener("click", function() {
    verificarContrasena();
});