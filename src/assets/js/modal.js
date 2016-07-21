;!function() {
    'use strict';
    var modal = document.getElementById('modal');
    var modalOpenBtn = document.getElementById('modal-open');
    var closeModalBtn = document.querySelectorAll('.js-close-modal');
    modalOpenBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    //todo close modal by clicking overlay
    [].forEach.call(closeModalBtn, function(elem) {
        elem.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
}();