function validation(form) {
    var formArray = form.elements;
    var valid = true;
    var message = 'Заполните это поле!';
    var errorContainer = document.createElement('div');
    errorContainer.innerHTML = message;
    for(var i = 0; i < formArray.length; i++) {
        if(formArray[i].hasAttribute('required') && formArray[i].value == '') {
            if (formArray[i].classList)
                formArray[i].classList.add('is-invalid');
            else
                formArray[i].className += ' is-invalid';
            valid = false;
        }
    }
    return valid;
}