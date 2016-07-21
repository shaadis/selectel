;!function() {
    var modal = document.getElementById('modal');
    var modalOpenBtn = document.getElementById('modal-open');
    var closeModalBtn = document.querySelectorAll('.js-close-modal');
    var docBody = document.body;
    modalOpenBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        if (docBody.classList)
            docBody.classList.add('is-modal-open');
        else
            docBody.className += ' is-modal-open';
    });
    //todo close modal by clicking overlay
    [].forEach.call(closeModalBtn, function(elem) {
        elem.addEventListener('click', function() {
            modal.style.display = 'none';
            docBody.classList.remove('is-modal-open');
        });
    });
}();