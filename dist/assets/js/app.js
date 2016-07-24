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
        //todo validate on keyup
        if (validation(form)) {
            request.send();
        }
    });
}();
'use strict';

;!function () {
    var modal = document.getElementById('modal');
    var modalOpenBtn = document.getElementById('modal-open');
    var closeModalBtn = document.querySelectorAll('.js-close-modal');
    var docBody = document.body;
    modalOpenBtn.addEventListener('click', function () {
        modal.style.display = 'block';
        if (docBody.classList) docBody.classList.add('is-modal-open');else docBody.className += ' is-modal-open';
    });
    //todo close modal by clicking overlay
    [].forEach.call(closeModalBtn, function (elem) {
        elem.addEventListener('click', function () {
            modal.style.display = 'none';
            docBody.classList.remove('is-modal-open');
        });
    });
}();
'use strict';

function validation(form) {
    var formArray = form.elements;
    var valid = true;
    var message = 'Заполните это поле!';
    var errorContainer = document.createElement('div');
    errorContainer.innerHTML = message;
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i].hasAttribute('required') && formArray[i].value == '') {
            if (formArray[i].classList) formArray[i].classList.add('form-input--invalid');else formArray[i].className += ' form-input--invalid';
            valid = false;
        }
    }
    return valid;
}
'use strict';

countdown('September 24, 2016 24:00:00');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZG93bi5qcyIsImZvcm0uanMiLCJtb2RhbC5qcyIsInZhbGlkYXRpb24uanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkI7QUFDdkIsUUFBSSxRQUFTLElBQUksSUFBSixDQUFTLE1BQVQsQ0FBYjs7QUFFQSxRQUFJLFdBQVcsU0FBWCxRQUFXLEdBQVc7QUFDdEIsWUFBSSxNQUFNLElBQUksSUFBSixFQUFWO0FBQ0EsWUFBSSxPQUFPLFFBQVEsR0FBbkI7O0FBRUEsWUFBSSxTQUFTO0FBQ1Qsd0JBQVksSUFESDtBQUVULHlCQUFhLElBRko7QUFHVCwyQkFBZTtBQUhOLFNBQWI7O0FBTUEsWUFBSSxVQUFVLEtBQWQ7QUFBQSxZQUNJLFFBQVEsVUFBUyxFQURyQjtBQUFBLFlBRUksT0FBTyxRQUFRLEVBRm5COztBQUlBLGlCQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFBMEI7QUFDdEIsZ0JBQUksTUFBTSxTQUFTLEVBQW5CO0FBQ0EsZ0JBQUcsSUFBSSxNQUFKLElBQWMsQ0FBakIsRUFBb0I7QUFDaEIsdUJBQU8sTUFBSyxHQUFaO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsdUJBQU8sR0FBUDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxVQUFQLEdBQW9CLFNBQVMsS0FBSyxLQUFMLENBQVcsT0FBTyxJQUFsQixDQUFULENBQXBCO0FBQ0EsZUFBTyxXQUFQLEdBQXFCLFNBQVMsS0FBSyxLQUFMLENBQVksT0FBTyxJQUFSLEdBQWdCLEtBQTNCLENBQVQsQ0FBckI7QUFDQSxlQUFPLGFBQVAsR0FBdUIsU0FBUyxLQUFLLEtBQUwsQ0FBWSxPQUFPLEtBQVIsR0FBaUIsT0FBNUIsQ0FBVCxDQUF2Qjs7QUFLQSxpQkFBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDLFNBQWhDLEdBQTRDLE9BQU8sVUFBbkQ7QUFDQSxpQkFBUyxjQUFULENBQXdCLE9BQXhCLEVBQWlDLFNBQWpDLEdBQTZDLE9BQU8s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QWUsSUFBSSxVQUFVLE1BQTdCLEVBQXFDLEdBQXJDLEVBQTBDO0FBQ3RDLFlBQUcsVUFBVSxDQUFWLEVBQWEsWUFBYixDQUEwQixVQUExQixLQUF5QyxVQUFVLENBQVYsRUFBYSxLQUFiLElBQXNCLEVBQWxFLEVBQXNFO0FBQ2xFLGdCQUFJLFVBQVUsQ0FBVixFQUFhLFNBQWpCLEVBQ0ksVUFBVSxDQUFWLEVBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixxQkFBM0IsRUFESixLQUdJLFVBQVUsQ0FBVixFQUFhLFNBQWIsSUFBMEIsc0JBQTFCO0FBQ0osb0JBQVEsS0FBUjtBQUNIO0FBQ0o7QUFDRCxXQUFPLEtBQVA7QUFDSDs7O0FDaEJELFVBQVUsNkJBQVYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY291bnRkb3duKHRvRGF0ZSkge1xyXG4gICAgdmFyIGZpbmFsID0gIG5ldyBEYXRlKHRvRGF0ZSk7XHJcblxyXG4gICAgdmFyIHJlbWFpbmVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRpZmYgPSBmaW5hbCAtIG5vdztcclxuXHJcbiAgICAgICAgdmFyIHJlbWFpbiA9IHtcclxuICAgICAgICAgICAgZGF5c1JlbWFpbjogbnVsbCxcclxuICAgICAgICAgICAgaG91cnNSZW1haW46IG51bGwsXHJcbiAgICAgICAgICAgIG1pbnV0ZXNSZW1haW46IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWludXRlcyA9IDYwMDAwLFxyXG4gICAgICAgICAgICBob3VycyA9IG1pbnV0ZXMgKjYwLFxyXG4gICAgICAgICAgICBkYXlzID0gaG91cnMgKiAyNDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbGVhZFplcm8obnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSBudW1iZXIgKyAnJztcclxuICAgICAgICAgICAgaWYobnVtLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzAnKyBudW07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW1haW4uZGF5c1JlbWFpbiA9IGxlYWRaZXJvKE1hdGguZmxvb3IoZGlmZiAvIGRheXMpKTtcclxuICAgICAgICByZW1haW4uaG91cnNSZW1haW4gPSBsZWFkWmVybyhNYXRoLmZsb29yKChkaWZmICUgZGF5cykgLyBob3VycykpO1xyXG4gICAgICAgIHJlbWFpbi5taW51dGVzUmVtYWluID0gbGVhZFplcm8oTWF0aC5mbG9vcigoZGlmZiAlIGhvdXJzKSAvIG1pbnV0ZXMpKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheXMnKS5pbm5lclRleHQgPSByZW1haW4uZGF5c1JlbWFpbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnMnKS5pbm5lclRleHQgPSByZW1haW4uaG91cnNSZW1haW47XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbnV0ZXMnKS5pbm5lclRleHQgPSByZW1haW4ubWludXRlc1JlbWFpbjtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvdW50ZXIgPSBzZXRJbnRlcnZhbChyZW1haW5lZCwgMTAwMCk7XHJcbn0iLCI7IWZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbmdyYXR1bGF0ZScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvL2NvdW50aW5nIHN1Ym1pdHNcclxuICAgICAgICB2YXIgY29uZ3JhdENvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpO1xyXG4gICAgICAgIGlmIChjb25ncmF0Q291bnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIGNvbmdyYXRDb3VudCA9IDA7XHJcbiAgICAgICAgY29uZ3JhdENvdW50Kys7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyZXhDb25ncmF0cycsIGNvbmdyYXRDb3VudCk7XHJcbiAgICAgICAgLy9zZW5kIGZvcm1cclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3Blbihmb3JtLm1ldGhvZCwgZm9ybS5hY3Rpb24sIHRydWUpO1xyXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3AgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVzcDtcclxuICAgICAgICAgICAgICAgIHZhciB0cmV4Q29uZ3JhdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25ncmF0cy1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgdHJleENvbmdyYXRDb250YWluZXIuaW5uZXJUZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dyb25nIHJlcXVlc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvYmxlbXMgb2Ygc29tZSBzb3J0Jyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL3RvZG8gdmFsaWRhdGUgb24ga2V5dXBcclxuICAgICAgICBpZiAodmFsaWRhdGlvbihmb3JtKSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0oKTtcclxuIiwiOyFmdW5jdGlvbigpIHtcclxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgdmFyIG1vZGFsT3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1vcGVuJyk7XHJcbiAgICB2YXIgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jbG9zZS1tb2RhbCcpO1xyXG4gICAgdmFyIGRvY0JvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgbW9kYWxPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaWYgKGRvY0JvZHkuY2xhc3NMaXN0KVxyXG4gICAgICAgICAgICBkb2NCb2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vZGFsLW9wZW4nKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGRvY0JvZHkuY2xhc3NOYW1lICs9ICcgaXMtbW9kYWwtb3Blbic7XHJcbiAgICB9KTtcclxuICAgIC8vdG9kbyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBvdmVybGF5XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoY2xvc2VNb2RhbEJ0biwgZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1tb2RhbC1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSgpOyIsImZ1bmN0aW9uIHZhbGlkYXRpb24oZm9ybSkge1xyXG4gICAgdmFyIGZvcm1BcnJheSA9IGZvcm0uZWxlbWVudHM7XHJcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG4gICAgdmFyIG1lc3NhZ2UgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INGN0YLQviDQv9C+0LvQtSEnO1xyXG4gICAgdmFyIGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlcnJvckNvbnRhaW5lci5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZvcm1BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGZvcm1BcnJheVtpXS5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgJiYgZm9ybUFycmF5W2ldLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtQXJyYXlbaV0uY2xhc3NMaXN0KVxyXG4gICAgICAgICAgICAgICAgZm9ybUFycmF5W2ldLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZm9ybUFycmF5W2ldLmNsYXNzTmFtZSArPSAnIGZvcm0taW5wdXQtLWludmFsaWQnO1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufSIsImNvdW50ZG93bignU2VwdGVtYmVyIDI0LCAyMDE2IDI0OjAwOjAwJyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
