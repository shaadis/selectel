'use strict';

;!function () {
    'use strict';

    var modal = document.getElementById('modal');
    var modalOpenBtn = document.getElementById('modal-open');
    var closeModalBtn = document.querySelectorAll('.js-close-modal');
    modalOpenBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });
    //todo close modal by clicking overlay
    [].forEach.call(closeModalBtn, function (elem) {
        elem.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });
}();
'use strict';

;!function () {
    'use strict';

    var submit = document.getElementById('submit');
    var form = document.getElementById('form-congratulate');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        //counting submits
        var congratCount = localStorage.getItem('trexCongrats');
        if (congratCount === null) congratCount = 0;
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
                trexCongratContainer.innerText = localStorage.getItem('trexCongrats');
            } else {
                console.log('wrong request');
            }
        };
        request.onerror = function () {
            console.log('problems of some sort');
        };
        request.send();
    });
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxDQUFDLFlBQVc7QUFDVDs7QUFDQSxRQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxRQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQW5CO0FBQ0EsUUFBSSxnQkFBZ0IsU0FBUyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBcEI7QUFDQSxpQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFXO0FBQzlDLGNBQU0sS0FBTixDQUFZLE9BQVosR0FBc0IsT0FBdEI7QUFDSCxLQUZEO0FBR0E7QUFDQSxPQUFHLE9BQUgsQ0FBVyxJQUFYLENBQWdCLGFBQWhCLEVBQStCLFVBQVMsSUFBVCxFQUFlO0FBQzFDLGFBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0QyxrQkFBTSxLQUFOLENBQVksT0FBWixHQUFzQixNQUF0QjtBQUNILFNBRkQ7QUFHSCxLQUpEO0FBS0gsQ0FkQyxFQUFEOzs7QUNBRCxDQUFDLENBQUMsWUFBVztBQUNUOztBQUNBLFFBQUksU0FBUyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLFFBQUksT0FBTyxTQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLENBQVg7O0FBR0EsU0FBSyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFTLENBQVQsRUFBWTtBQUN4QyxVQUFFLGNBQUY7QUFDQTtBQUNBLFlBQUksZUFBZSxhQUFhLE9BQWIsQ0FBcUIsY0FBckIsQ0FBbkI7QUFDQSxZQUFHLGlCQUFpQixJQUFwQixFQUNJLGVBQWUsQ0FBZjtBQUNKO0FBQ0EscUJBQWEsT0FBYixDQUFxQixjQUFyQixFQUFxQyxZQUFyQzs7QUFFQTtBQUNBLFlBQUksVUFBVSxJQUFJLGNBQUosRUFBZDtBQUNBLGdCQUFRLElBQVIsQ0FBYSxLQUFLLE1BQWxCLEVBQTBCLEtBQUssTUFBL0IsRUFBdUMsSUFBdkM7QUFDQSxnQkFBUSxNQUFSLEdBQWlCLFlBQVU7QUFDdkIsZ0JBQUksT0FBTyxJQUFYO0FBQ0EsZ0JBQUksUUFBUSxNQUFSLElBQWtCLEdBQWxCLElBQXlCLFFBQVEsTUFBUixHQUFpQixHQUE5QyxFQUFtRDtBQUMvQyx1QkFBTyxRQUFRLFlBQWY7QUFDQSx5QkFBUyxjQUFULENBQXdCLFlBQXhCLEVBQXNDLFNBQXRDLEdBQWtELElBQWxEO0FBQ0Esb0JBQUksdUJBQXVCLFNBQVMsY0FBVCxDQUF3QixnQkFBeEIsQ0FBM0I7QUFDQSxxQ0FBcUIsU0FBckIsR0FBaUMsYUFBYSxPQUFiLENBQXFCLGNBQXJCLENBQWpDO0FBQ0gsYUFMRCxNQUtPO0FBQ0gsd0JBQVEsR0FBUixDQUFZLGVBQVo7QUFDSDtBQUNKLFNBVkQ7QUFXQSxnQkFBUSxPQUFSLEdBQWtCLFlBQVc7QUFDekIsb0JBQVEsR0FBUixDQUFZLHVCQUFaO0FBQ0gsU0FGRDtBQUdBLGdCQUFRLElBQVI7QUFDSCxLQTNCRDtBQTRCSCxDQWxDQyxFQUFEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjshZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIHZhciBtb2RhbE9wZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtb3BlbicpO1xyXG4gICAgdmFyIGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xvc2UtbW9kYWwnKTtcclxuICAgIG1vZGFsT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgICAvL3RvZG8gY2xvc2UgbW9kYWwgYnkgY2xpY2tpbmcgb3ZlcmxheVxyXG4gICAgW10uZm9yRWFjaC5jYWxsKGNsb3NlTW9kYWxCdG4sIGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSgpOyIsIjshZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb25ncmF0dWxhdGUnKTtcclxuXHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vY291bnRpbmcgc3VibWl0c1xyXG4gICAgICAgIHZhciBjb25ncmF0Q291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJleENvbmdyYXRzJyk7XHJcbiAgICAgICAgaWYoY29uZ3JhdENvdW50ID09PSBudWxsKVxyXG4gICAgICAgICAgICBjb25ncmF0Q291bnQgPSAwO1xyXG4gICAgICAgIGNvbmdyYXRDb3VudCsrO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmV4Q29uZ3JhdHMnLCBjb25ncmF0Q291bnQpO1xyXG5cclxuICAgICAgICAvL3NlbmQgZm9ybVxyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKGZvcm0ubWV0aG9kLCBmb3JtLmFjdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgcmVzcCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3AgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVzcDtcclxuICAgICAgICAgICAgICAgIHZhciB0cmV4Q29uZ3JhdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25ncmF0cy1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgdHJleENvbmdyYXRDb250YWluZXIuaW5uZXJUZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dyb25nIHJlcXVlc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9ibGVtcyBvZiBzb21lIHNvcnQnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgfSk7XHJcbn0oKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
