;!function () {
  var submit = document.getElementById('submit');
  var form = document.getElementById('form-congratulate');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    //counting submits = number of congratulations
    var congratCount = localStorage.getItem('trexCongrats');
    if (congratCount === null)
      congratCount = 0;
    congratCount++;
    localStorage.setItem('trexCongrats', congratCount);
    //send form
    var request = new XMLHttpRequest();
    request.open(form.method, form.action, true);
    request.onload = function () {
      var resp = null;
      if (request.status >= 200 && request.status < 400) {
        resp = request.responseText;
        document.getElementById('modal-body').innerHTML = resp;
        var trexCongratContainer = document.getElementById('congrats-count');
        //counting congratulations and store into container
        congratsCount(localStorage.getItem('trexCongrats'), trexCongratContainer);
      } else {
        console.log('wrong request');
      }
    };
    request.onerror = function () {
      console.log('problems of some sort');
    };
    //todo validate on keyup
    if (validation(form)) {
      request.send();
    }

  });
}();
