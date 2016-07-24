;!function () {
  var modal = document.getElementById('modal');
  var modalOpenBtn = document.getElementById('modal-open');
  var closeModalBtn = document.querySelectorAll('.js-close-modal');
  var docBody = document.body;
  modalOpenBtn.addEventListener('click', function () {
    modal.style.display = 'block';
      addClass(docBody, 'is-modal-open');
  });
  //todo close modal by clicking overlay
  [].forEach.call(closeModalBtn, function (elem) {
    elem.addEventListener('click', function () {
      modal.style.display = 'none';
      removeClass(docBody, 'is-modal-open');
    });
  });
}();