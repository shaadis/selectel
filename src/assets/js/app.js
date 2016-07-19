'use strict';
/*form*/

!function() {
    var submit = document.getElementById('submit');
    var form = document.getElementById('form-congratulate');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var form = e.target;
        var request = new XMLHttpRequest();
        var data = new FormData(form);
        request.open(form.method, form.action);
        request.send(data);
        request.onload = function(){
            var resp = null;
            if (request.status >= 200 && request.status < 400) {
                resp = request.responseText;
                form.innerHTML = resp;
            } else {
                console.log('wrong request');
            }
        };
        request.onerror = function() {
            console.log('problems of some sort');
        };
    });
}();


