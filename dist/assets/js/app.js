'use strict';

function countdown(toDate) {
    var final = new Date(toDate);

    var remained = function remained() {
        var now = new Date();
        var diff = final - now;

        var remain = {
            daysRemain: null,
            hoursRemain: null,
            minutesRemain: null
        };

        var minutes = 60000,
            hours = minutes * 60,
            days = hours * 24;

        function leadZero(number) {
            var num = number + '';
            if (num.length <= 1) {
                return '0' + num;
            } else {
                return num;
            }
        }

        remain.daysRemain = leadZero(Math.floor(diff / days));
        remain.hoursRemain = leadZero(Math.floor(diff % days / hours));
        remain.minutesRemain = leadZero(Math.floor(diff % hours / minutes));

        document.getElementById('days').innerText = remain.daysRemain;
        document.getElementById('hours').innerText = remain.hoursRemain;
        document.getElementById('minutes').innerText = remain.minutesRemain;
    };

    var counter = setInterval(remained, 1000);
}
'use strict';

;!function () {
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
'use strict';

;!function () {
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

countdown('September 24, 2016 24:00:00');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZG93bi5qcyIsImZvcm0uanMiLCJtb2RhbC5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUN2QixRQUFJLFFBQVMsSUFBSSxJQUFKLENBQVMsTUFBVCxDQUFiOztBQUVBLFFBQUksV0FBVyxTQUFYLFFBQVcsR0FBVztBQUN0QixZQUFJLE1BQU0sSUFBSSxJQUFKLEVBQVY7QUFDQSxZQUFJLE9BQU8sUUFBUSxHQUFuQjs7QUFFQSxZQUFJLFNBQVM7QUFDVCx3QkFBWSxJQURIO0FBRVQseUJBQWEsSUFGSjtBQUdULDJCQUFlO0FBSE4sU0FBYjs7QUFNQSxZQUFJLFVBQVUsS0FBZDtBQUFBLFlBQ0ksUUFBUSxVQUFTLEVBRHJCO0FBQUEsWUFFSSxPQUFPLFFBQVEsRUFGbkI7O0FBSUEsaUJBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQjtBQUN0QixnQkFBSSxNQUFNLFNBQVMsRUFBbkI7QUFDQSxnQkFBRyxJQUFJLE1BQUosSUFBYyxDQUFqQixFQUFvQjtBQUNoQix1QkFBTyxNQUFLLEdBQVo7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBTyxHQUFQO0FBQ0g7QUFDSjs7QUFFRCxlQUFPLFVBQVAsR0FBb0IsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUFPLElBQWxCLENBQVQsQ0FBcEI7QUFDQSxlQUFPLFdBQVAsR0FBcUIsU0FBUyxLQUFLLEtBQUwsQ0FBWSxPQUFPLElBQVIsR0FBZ0IsS0FBM0IsQ0FBVCxDQUFyQjtBQUNBLGVBQU8sYUFBUCxHQUF1QixTQUFTLEtBQUssS0FBTCxDQUFZLE9BQU8sS0FBUixHQUFpQixPQUE1QixDQUFULENBQXZCOztBQUtBLGlCQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsU0FBaEMsR0FBNEMsT0FBTyxVQUFuRDtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUMsU0FBakMsR0FBNkMsT0FBTyxXQUFwRDtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsU0FBbkMsR0FBK0MsT0FBTyxhQUF0RDtBQUNILEtBakNEOztBQW1DQSxRQUFJLFVBQVUsWUFBWSxRQUFaLEVBQXNCLElBQXRCLENBQWQ7QUFDSDs7O0FDdkNELENBQUMsQ0FBQyxZQUFXO0FBQ1QsUUFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsUUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixtQkFBeEIsQ0FBWDs7QUFFQSxTQUFLLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQVMsQ0FBVCxFQUFZO0FBQ3hDLFVBQUUsY0FBRjtBQUNBO0FBQ0EsWUFBSSxlQUFlLGFBQWEsT0FBYixDQUFxQixjQUFyQixDQUFuQjtBQUNBLFlBQUcsaUJBQWlCLElBQXBCLEVBQ0ksZUFBZSxDQUFmO0FBQ0o7QUFDQSxxQkFBYSxPQUFiLENBQXFCLGNBQXJCLEVBQXFDLFlBQXJDOztBQUVBO0FBQ0EsWUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsZ0JBQVEsSUFBUixDQUFhLEtBQUssTUFBbEIsRUFBMEIsS0FBSyxNQUEvQixFQUF1QyxJQUF2QztBQUNBLGdCQUFRLE1BQVIsR0FBaUIsWUFBVTtBQUN2QixnQkFBSSxPQUFPLElBQVg7QUFDQSxnQkFBSSxRQUFRLE1BQVIsSUFBa0IsR0FBbEIsSUFBeUIsUUFBUSxNQUFSLEdBQWlCLEdBQTlDLEVBQW1EO0FBQy9DLHVCQUFPLFFBQVEsWUFBZjtBQUNBLHlCQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsU0FBdEMsR0FBa0QsSUFBbEQ7QUFDQSxvQkFBSSx1QkFBdUIsU0FBUyxjQUFULENBQXdCLGdCQUF4QixDQUEzQjtBQUNBLHFDQUFxQixTQUFyQixHQUFpQyxhQUFhLE9BQWIsQ0FBcUIsY0FBckIsQ0FBakM7QUFDSCxhQUxELE1BS087QUFDSCx3QkFBUSxHQUFSLENBQVksZUFBWjtBQUNIO0FBQ0osU0FWRDtBQVdBLGdCQUFRLE9BQVIsR0FBa0IsWUFBVztBQUN6QixvQkFBUSxHQUFSLENBQVksdUJBQVo7QUFDSCxTQUZEO0FBR0EsZ0JBQVEsSUFBUjtBQUNILEtBM0JEO0FBNEJILENBaENDLEVBQUQ7OztBQ0FELENBQUMsQ0FBQyxZQUFXO0FBQ1QsUUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0EsUUFBSSxlQUFlLFNBQVMsY0FBVCxDQUF3QixZQUF4QixDQUFuQjtBQUNBLFFBQUksZ0JBQWdCLFNBQVMsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXBCO0FBQ0EsaUJBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBVztBQUM5QyxjQUFNLEtBQU4sQ0FBWSxPQUFaLEdBQXNCLE9BQXRCO0FBQ0gsS0FGRDtBQUdBO0FBQ0EsT0FBRyxPQUFILENBQVcsSUFBWCxDQUFnQixhQUFoQixFQUErQixVQUFTLElBQVQsRUFBZTtBQUMxQyxhQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDdEMsa0JBQU0sS0FBTixDQUFZLE9BQVosR0FBc0IsTUFBdEI7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQUtILENBYkMsRUFBRDs7O0FDQUQsVUFBVSw2QkFBViIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb3VudGRvd24odG9EYXRlKSB7XHJcbiAgICB2YXIgZmluYWwgPSAgbmV3IERhdGUodG9EYXRlKTtcclxuXHJcbiAgICB2YXIgcmVtYWluZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZGlmZiA9IGZpbmFsIC0gbm93O1xyXG5cclxuICAgICAgICB2YXIgcmVtYWluID0ge1xyXG4gICAgICAgICAgICBkYXlzUmVtYWluOiBudWxsLFxyXG4gICAgICAgICAgICBob3Vyc1JlbWFpbjogbnVsbCxcclxuICAgICAgICAgICAgbWludXRlc1JlbWFpbjogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtaW51dGVzID0gNjAwMDAsXHJcbiAgICAgICAgICAgIGhvdXJzID0gbWludXRlcyAqNjAsXHJcbiAgICAgICAgICAgIGRheXMgPSBob3VycyAqIDI0O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsZWFkWmVybyhudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IG51bWJlciArICcnO1xyXG4gICAgICAgICAgICBpZihudW0ubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnMCcrIG51bTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbWFpbi5kYXlzUmVtYWluID0gbGVhZFplcm8oTWF0aC5mbG9vcihkaWZmIC8gZGF5cykpO1xyXG4gICAgICAgIHJlbWFpbi5ob3Vyc1JlbWFpbiA9IGxlYWRaZXJvKE1hdGguZmxvb3IoKGRpZmYgJSBkYXlzKSAvIGhvdXJzKSk7XHJcbiAgICAgICAgcmVtYWluLm1pbnV0ZXNSZW1haW4gPSBsZWFkWmVybyhNYXRoLmZsb29yKChkaWZmICUgaG91cnMpIC8gbWludXRlcykpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5cycpLmlubmVyVGV4dCA9IHJlbWFpbi5kYXlzUmVtYWluO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VycycpLmlubmVyVGV4dCA9IHJlbWFpbi5ob3Vyc1JlbWFpbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludXRlcycpLmlubmVyVGV4dCA9IHJlbWFpbi5taW51dGVzUmVtYWluO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY291bnRlciA9IHNldEludGVydmFsKHJlbWFpbmVkLCAxMDAwKTtcclxufSIsIjshZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb25ncmF0dWxhdGUnKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9jb3VudGluZyBzdWJtaXRzXHJcbiAgICAgICAgdmFyIGNvbmdyYXRDb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmV4Q29uZ3JhdHMnKTtcclxuICAgICAgICBpZihjb25ncmF0Q291bnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIGNvbmdyYXRDb3VudCA9IDA7XHJcbiAgICAgICAgY29uZ3JhdENvdW50Kys7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyZXhDb25ncmF0cycsIGNvbmdyYXRDb3VudCk7XHJcblxyXG4gICAgICAgIC8vc2VuZCBmb3JtXHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oZm9ybS5tZXRob2QsIGZvcm0uYWN0aW9uLCB0cnVlKTtcclxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciByZXNwID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXNwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyZXhDb25ncmF0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmdyYXRzLWNvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICB0cmV4Q29uZ3JhdENvbnRhaW5lci5pbm5lclRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJleENvbmdyYXRzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd3JvbmcgcmVxdWVzdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2JsZW1zIG9mIHNvbWUgc29ydCcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICB9KTtcclxufSgpO1xyXG4iLCI7IWZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICB2YXIgbW9kYWxPcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLW9wZW4nKTtcclxuICAgIHZhciBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWNsb3NlLW1vZGFsJyk7XHJcbiAgICBtb2RhbE9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG4gICAgLy90b2RvIGNsb3NlIG1vZGFsIGJ5IGNsaWNraW5nIG92ZXJsYXlcclxuICAgIFtdLmZvckVhY2guY2FsbChjbG9zZU1vZGFsQnRuLCBmdW5jdGlvbihlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0oKTsiLCJjb3VudGRvd24oJ1NlcHRlbWJlciAyNCwgMjAxNiAyNDowMDowMCcpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
