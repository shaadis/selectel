'use strict';

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else element.className += ' ' + className;
}

function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element[className] = element[className].replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
'use strict';

function congratsCount(congrat, container) {
  var span = document.createElement('span');
  var gramm = function gramm(congrat) {
    var string = 'поздравлений';
    if (congrat % 100 < 11 || congrat % 100 > 14) {
      switch (congrat % 10) {
        case 1:
          string = 'поздравление';break;
        case 2:
        case 3:
        case 4:
          string = 'поздравления';break;
      }
    }
    return string;
  };
  //todo separate span and word "gramm"
  span.className = 'congrats-count';
  span.innerHTML = congrat + ' ' + gramm(congrat);
  container.appendChild(span);
}
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
            var num = number.toString();
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
    //counting submits = number of congratulations
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
'use strict';

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
'use strict';

;!function () {
  var slider = document.getElementById('slider'),
      nextBtn = document.getElementById('next'),
      prevBtn = document.getElementById('prev'),
      slides = slider.getElementsByTagName('li'),
      counter = 0;

  function showImage(index) {
    [].forEach.call(slides, function (elem) {
      removeClass(elem, 'slider__item--active');
    });
    addClass(slides[index], 'slider__item--active');
  }

  function nextImg() {
    if (counter < slides.length - 1) {
      counter += 1;
    } else {
      counter = 0;
    }
    showImage(counter);
  }

  function prevImg() {
    if (counter > 0) {
      counter -= 1;
    } else {
      counter = slides.length - 1;
    }
    showImage(counter);
  }

  window.setInterval(prevImg, 6000);

  nextBtn.onclick = nextImg;
  prevBtn.onclick = prevImg;
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

countdown('September 24, 2016 00:00:00');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiLCJjb25ncmF0cy1jb3VudC5qcyIsImNvdW50ZG93bi5qcyIsImZvcm0uanMiLCJtb2RhbC5qcyIsInNsaWRlci5qcyIsInZhbGlkYXRpb24uanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsU0FBM0IsRUFBc0M7QUFDcEMsTUFBSSxRQUFRLFNBQVosRUFDRSxRQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEIsRUFERixLQUdFLFFBQVEsU0FBUixJQUFxQixNQUFNLFNBQTNCO0FBQ0g7O0FBRUQsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCLFNBQTlCLEVBQXlDO0FBQ3ZDLE1BQUksUUFBUSxTQUFaLEVBQ0UsUUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFNBQXpCLEVBREYsS0FHRSxRQUFRLFNBQVIsSUFBcUIsUUFBUSxTQUFSLEVBQW1CLE9BQW5CLENBQTJCLElBQUksTUFBSixDQUFXLFlBQVksVUFBVSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCLENBQTBCLEdBQTFCLENBQVosR0FBNkMsU0FBeEQsRUFBbUUsSUFBbkUsQ0FBM0IsRUFBcUcsR0FBckcsQ0FBckI7QUFDSDs7O0FDWkQsU0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLEVBQTJDO0FBQ3pDLE1BQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBLE1BQUksUUFBUSxTQUFSLEtBQVEsQ0FBUyxPQUFULEVBQWtCO0FBQzVCLFFBQUksU0FBUyxjQUFiO0FBQ0EsUUFBRyxVQUFRLEdBQVIsR0FBYyxFQUFkLElBQW9CLFVBQVEsR0FBUixHQUFjLEVBQXJDLEVBQXlDO0FBQ3hDLGNBQVEsVUFBUSxFQUFoQjtBQUNFLGFBQUssQ0FBTDtBQUFRLG1CQUFTLGNBQVQsQ0FBeUI7QUFDakMsYUFBSyxDQUFMO0FBQ0EsYUFBSyxDQUFMO0FBQ0EsYUFBSyxD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QkFBSSxVQUFVLENBQVYsRUFBYSxTQUFqQixFQUNJLFVBQVUsQ0FBVixFQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIscUJBQTNCLEVBREosS0FHSSxVQUFVLENBQVYsRUFBYSxTQUFiLElBQTBCLHNCQUExQjtBQUNKLG9CQUFRLEtBQVI7QUFDSDtBQUNKO0FBQ0QsV0FBTyxLQUFQO0FBQ0g7OztBQ2hCRCxVQUFVLDZCQUFWIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIGVsc2VcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgZWxzZVxyXG4gICAgZWxlbWVudFtjbGFzc05hbWVdID0gZWxlbWVudFtjbGFzc05hbWVdLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxufSIsImZ1bmN0aW9uIGNvbmdyYXRzQ291bnQoY29uZ3JhdCwgY29udGFpbmVyKSB7XHJcbiAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdmFyIGdyYW1tID0gZnVuY3Rpb24oY29uZ3JhdCkge1xyXG4gICAgdmFyIHN0cmluZyA9ICfQv9C+0LfQtNGA0LDQstC70LXQvdC40LknO1xyXG4gICAgaWYoY29uZ3JhdCUxMDAgPCAxMSB8fCBjb25ncmF0JTEwMCA+IDE0KSB7XHJcbiAgICAgc3dpdGNoIChjb25ncmF0JTEwKSB7XHJcbiAgICAgICBjYXNlIDE6IHN0cmluZyA9ICfQv9C+0LfQtNGA0LDQstC70LXQvdC40LUnOyBicmVhaztcclxuICAgICAgIGNhc2UgMjpcclxuICAgICAgIGNhc2UgMzpcclxuICAgICAgIGNhc2UgNDogc3RyaW5nID0gJ9C/0L7Qt9C00YDQsNCy0LvQtdC90LjRjyc7IGJyZWFrO1xyXG4gICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmc7XHJcbiAgfTtcclxuICAvL3RvZG8gc2VwYXJhdGUgc3BhbiBhbmQgd29yZCBcImdyYW1tXCJcclxuICBzcGFuLmNsYXNzTmFtZT0gJ2NvbmdyYXRzLWNvdW50JztcclxuICBzcGFuLmlubmVySFRNTCA9IGNvbmdyYXQgKyAnICcgKyBncmFtbShjb25ncmF0KTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbn0iLCJmdW5jdGlvbiBjb3VudGRvd24odG9EYXRlKSB7XHJcbiAgICB2YXIgZmluYWwgPSAgbmV3IERhdGUodG9EYXRlKTtcclxuXHJcbiAgICB2YXIgcmVtYWluZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZGlmZiA9IGZpbmFsIC0gbm93O1xyXG5cclxuICAgICAgICB2YXIgcmVtYWluID0ge1xyXG4gICAgICAgICAgICBkYXlzUmVtYWluOiBudWxsLFxyXG4gICAgICAgICAgICBob3Vyc1JlbWFpbjogbnVsbCxcclxuICAgICAgICAgICAgbWludXRlc1JlbWFpbjogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtaW51dGVzID0gNjAwMDAsXHJcbiAgICAgICAgICAgIGhvdXJzID0gbWludXRlcyAqNjAsXHJcbiAgICAgICAgICAgIGRheXMgPSBob3VycyAqIDI0O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsZWFkWmVybyhudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IG51bWJlci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZihudW0ubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnMCcrIG51bTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbWFpbi5kYXlzUmVtYWluID0gbGVhZFplcm8oTWF0aC5mbG9vcihkaWZmIC8gZGF5cykpO1xyXG4gICAgICAgIHJlbWFpbi5ob3Vyc1JlbWFpbiA9IGxlYWRaZXJvKE1hdGguZmxvb3IoKGRpZmYgJSBkYXlzKSAvIGhvdXJzKSk7XHJcbiAgICAgICAgcmVtYWluLm1pbnV0ZXNSZW1haW4gPSBsZWFkWmVybyhNYXRoLmZsb29yKChkaWZmICUgaG91cnMpIC8gbWludXRlcykpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5cycpLmlubmVyVGV4dCA9IHJlbWFpbi5kYXlzUmVtYWluO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VycycpLmlubmVyVGV4dCA9IHJlbWFpbi5ob3Vyc1JlbWFpbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludXRlcycpLmlubmVyVGV4dCA9IHJlbWFpbi5taW51dGVzUmVtYWluO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY291bnRlciA9IHNldEludGVydmFsKHJlbWFpbmVkLCAxMDAwKTtcclxufSIsIjshZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb25ncmF0dWxhdGUnKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvdW50aW5nIHN1Ym1pdHMgPSBudW1iZXIgb2YgY29uZ3JhdHVsYXRpb25zXHJcbiAgICB2YXIgY29uZ3JhdENvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpO1xyXG4gICAgaWYgKGNvbmdyYXRDb3VudCA9PT0gbnVsbClcclxuICAgICAgY29uZ3JhdENvdW50ID0gMDtcclxuICAgIGNvbmdyYXRDb3VudCsrO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyZXhDb25ncmF0cycsIGNvbmdyYXRDb3VudCk7XHJcbiAgICAvL3NlbmQgZm9ybVxyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3Blbihmb3JtLm1ldGhvZCwgZm9ybS5hY3Rpb24sIHRydWUpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciByZXNwID0gbnVsbDtcclxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgIHJlc3AgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlc3A7XHJcbiAgICAgICAgdmFyIHRyZXhDb25ncmF0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmdyYXRzLWNvdW50Jyk7XHJcbiAgICAgICAgLy9jb3VudGluZyBjb25ncmF0dWxhdGlvbnMgYW5kIHN0b3JlIGludG8gY29udGFpbmVyXHJcbiAgICAgICAgY29uZ3JhdHNDb3VudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJleENvbmdyYXRzJyksIHRyZXhDb25ncmF0Q29udGFpbmVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd3JvbmcgcmVxdWVzdCcpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygncHJvYmxlbXMgb2Ygc29tZSBzb3J0Jyk7XHJcbiAgICB9O1xyXG4gICAgLy90b2RvIHZhbGlkYXRlIG9uIGtleXVwXHJcbiAgICBpZiAodmFsaWRhdGlvbihmb3JtKSkge1xyXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn0oKTtcclxuIiwiOyFmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgdmFyIG1vZGFsT3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1vcGVuJyk7XHJcbiAgdmFyIGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xvc2UtbW9kYWwnKTtcclxuICB2YXIgZG9jQm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgbW9kYWxPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGFkZENsYXNzKGRvY0JvZHksICdpcy1tb2RhbC1vcGVuJyk7XHJcbiAgfSk7XHJcbiAgLy90b2RvIGNsb3NlIG1vZGFsIGJ5IGNsaWNraW5nIG92ZXJsYXlcclxuICBbXS5mb3JFYWNoLmNhbGwoY2xvc2VNb2RhbEJ0biwgZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHJlbW92ZUNsYXNzKGRvY0JvZHksICdpcy1tb2RhbC1vcGVuJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSgpOyIsIjshZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyksXHJcbiAgICBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKSxcclxuICAgIHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpLFxyXG4gICAgc2xpZGVzID0gc2xpZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpLFxyXG4gICAgY291bnRlciA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dJbWFnZShpbmRleCkge1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKHNsaWRlcywgZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbSwgJ3NsaWRlcl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGFkZENsYXNzKHNsaWRlc1tpbmRleF0sICdzbGlkZXJfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbmV4dEltZygpIHtcclxuICAgIGlmIChjb3VudGVyIDwgc2xpZGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgY291bnRlciArPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY291bnRlciA9IDA7XHJcbiAgICB9XHJcbiAgICBzaG93SW1hZ2UoY291bnRlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwcmV2SW1nKCkge1xyXG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XHJcbiAgICAgIGNvdW50ZXIgLT0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvdW50ZXIgPSBzbGlkZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICAgIHNob3dJbWFnZShjb3VudGVyKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5zZXRJbnRlcnZhbChwcmV2SW1nLCA2MDAwKTtcclxuXHJcbiAgbmV4dEJ0bi5vbmNsaWNrID0gbmV4dEltZztcclxuICBwcmV2QnRuLm9uY2xpY2sgPSBwcmV2SW1nO1xyXG59KCk7IiwiZnVuY3Rpb24gdmFsaWRhdGlvbihmb3JtKSB7XHJcbiAgICB2YXIgZm9ybUFycmF5ID0gZm9ybS5lbGVtZW50cztcclxuICAgIHZhciB2YWxpZCA9IHRydWU7XHJcbiAgICB2YXIgbWVzc2FnZSA9ICfQl9Cw0L/QvtC70L3QuNGC0LUg0Y3RgtC+INC/0L7Qu9C1ISc7XHJcbiAgICB2YXIgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVycm9yQ29udGFpbmVyLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZm9ybUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZm9ybUFycmF5W2ldLmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKSAmJiBmb3JtQXJyYXlbaV0udmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1BcnJheVtpXS5jbGFzc0xpc3QpXHJcbiAgICAgICAgICAgICAgICBmb3JtQXJyYXlbaV0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dC0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBmb3JtQXJyYXlbaV0uY2xhc3NOYW1lICs9ICcgZm9ybS1pbnB1dC0taW52YWxpZCc7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG59IiwiY291bnRkb3duKCdTZXB0ZW1iZXIgMjQsIDIwMTYgMDA6MDA6MDAnKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
