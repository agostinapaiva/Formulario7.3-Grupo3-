function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
//Validar contraseña
if (password1.length < 6) {
    showAlertError('La contraseña debe tener al menos 6caracteres.');
} else if (password1 !== password2) {
    showAlertError('Las contraseñas no coinciden.');
} else {
    showAlertSuccess();
}