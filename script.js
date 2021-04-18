function validarForm() {
    var select = formcontato.exampleselect.value;
    var email = formcontato.email.value;

    if (select == "") {
        alert("Obrigatório Selecionar")
        formcontato.email.focus();
        return false;
    }

}