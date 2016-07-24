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

;!function () {
  var slider = document.getElementById('slider'),
      nextBtn = document.getElementById('next'),
      prevBtn = document.getElementById('prev'),
      slides = slider.getElementsByTagName('li'),
      counter = 0;

  console.log(slider);
  function showImage(index) {
    // Remove all classnames on the slides (so hide them)
    for (var i = 0; i < slides.length; i++) {

      if (slides[i].classList) slides[i].classList.remove('slider__item--active');else slides[i]['slider__item--active'] = slides[i]['slider__item--active'].replace(new RegExp('(^|\\b)' + 'slider__item--active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    // Add the showImage classname to the img-element you want
    //slides[index].className = 'showImage';
    if (slides[index].classList) slides[index].classList.add('slider__item--active');else slides[index].className += ' slider__item--active';
  }

  function nextImg() {
    // counter variable gets the current img selected
    // if we have the last img, we switch back to the first one again

    if (counter < slides.length - 1) {
      counter += 1;
    } else {
      counter = 0;
    }

    showImage(counter);
  }

  function prevImg() {
    // counter variable gets the current img selected
    // if we have the first img, we switch back to the last one again

    if (counter > 0) {
      counter -= 1;
    } else {
      counter = slides.length - 1;
    }

    showImage(counter);
  }

  //  If you want to have an auto-slider, uncomment this: 
  window.setInterval(prevImg, 6000);

  // give the buttons an onclick event
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

countdown('September 24, 2016 24:00:00');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdyYXRzLWNvdW50LmpzIiwiY291bnRkb3duLmpzIiwiZm9ybS5qcyIsIm1vZGFsLmpzIiwic2xpZGVyLmpzIiwidmFsaWRhdGlvbi5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxTQUFoQyxFQUEyQztBQUN6QyxNQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQSxNQUFJLFFBQVEsU0FBUixLQUFRLENBQVMsT0FBVCxFQUFrQjtBQUM1QixRQUFJLFNBQVMsY0FBYjtBQUNBLFFBQUcsVUFBUSxHQUFSLEdBQWMsRUFBZCxJQUFvQixVQUFRLEdBQVIsR0FBYyxFQUFyQyxFQUF5QztBQUN4QyxjQUFRLFVBQVEsRUFBaEI7QUFDRSxhQUFLLENBQUw7QUFBUSxtQkFBUyxjQUFULENBQXlCO0FBQ2pDLGFBQUssQ0FBTDtBQUNBLGFBQUssQ0FBTDtBQUNBLGFBQUssQ0FBTDtBQUFRLG1CQUFTLGNBQVQsQ0FBeUI7QUFKbkM7QUFNQTtBQUNELFdBQU8sTUFBUDtBQUNELEdBWEQ7QUFZQTtBQUNBLE9BQUssU0FBTCxHQUFnQixnQkFBaEI7QUFDQSxPQUFLLFNBQUwsR0FBaUIsVUFBVSxHQUFWLEdBQWdCLE1BQU0sT0FBTixDQUFqQztBQUNBLFlBQVUsV0FBVixDQUFzQixJQUF0QjtBQUNEOzs7QUNsQkQsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ3ZCLFFBQUksUUFBUyxJQUFJLElBQUosQ0FBUyxNQUFULENBQWI7O0FBRUEsUUFBSSxXQUFXLFNBQVgsUUFBVyxHQUFXO0FBQ3RCLFlBQUksTUFBTSxJQUFJLElBQUosRUFBVjtBQUNBLFlBQUksT0FBTyxRQUFRLEdBQW5COztBQUVBLFlBQUksU0FBUztBQUNULHdCQUFZLElBREg7QUFFVCx5QkFBYSxJQUZKO0FBR1QsMkJBQWU7QUFITixTQUFiOztBQU1BLFlBQUksVUFBVSxLQUFkO0FBQUEsWUFD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VSxDQUFWLEVBQWEsS0FBYixJQUFzQixFQUFsRSxFQUFzRTtBQUNsRSxnQkFBSSxVQUFVLENBQVYsRUFBYSxTQUFqQixFQUNJLFVBQVUsQ0FBVixFQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIscUJBQTNCLEVBREosS0FHSSxVQUFVLENBQVYsRUFBYSxTQUFiLElBQTBCLHNCQUExQjtBQUNKLG9CQUFRLEtBQVI7QUFDSDtBQUNKO0FBQ0QsV0FBTyxLQUFQO0FBQ0g7OztBQ2hCRCxVQUFVLDZCQUFWIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbmdyYXRzQ291bnQoY29uZ3JhdCwgY29udGFpbmVyKSB7XHJcbiAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdmFyIGdyYW1tID0gZnVuY3Rpb24oY29uZ3JhdCkge1xyXG4gICAgdmFyIHN0cmluZyA9ICfQv9C+0LfQtNGA0LDQstC70LXQvdC40LknO1xyXG4gICAgaWYoY29uZ3JhdCUxMDAgPCAxMSB8fCBjb25ncmF0JTEwMCA+IDE0KSB7XHJcbiAgICAgc3dpdGNoIChjb25ncmF0JTEwKSB7XHJcbiAgICAgICBjYXNlIDE6IHN0cmluZyA9ICfQv9C+0LfQtNGA0LDQstC70LXQvdC40LUnOyBicmVhaztcclxuICAgICAgIGNhc2UgMjpcclxuICAgICAgIGNhc2UgMzpcclxuICAgICAgIGNhc2UgNDogc3RyaW5nID0gJ9C/0L7Qt9C00YDQsNCy0LvQtdC90LjRjyc7IGJyZWFrO1xyXG4gICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmc7XHJcbiAgfTtcclxuICAvL3RvZG8gc2VwYXJhdGUgc3BhbiBhbmQgd29yZCBcImdyYW1tXCJcclxuICBzcGFuLmNsYXNzTmFtZT0gJ2NvbmdyYXRzLWNvdW50JztcclxuICBzcGFuLmlubmVySFRNTCA9IGNvbmdyYXQgKyAnICcgKyBncmFtbShjb25ncmF0KTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbn0iLCJmdW5jdGlvbiBjb3VudGRvd24odG9EYXRlKSB7XHJcbiAgICB2YXIgZmluYWwgPSAgbmV3IERhdGUodG9EYXRlKTtcclxuXHJcbiAgICB2YXIgcmVtYWluZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZGlmZiA9IGZpbmFsIC0gbm93O1xyXG5cclxuICAgICAgICB2YXIgcmVtYWluID0ge1xyXG4gICAgICAgICAgICBkYXlzUmVtYWluOiBudWxsLFxyXG4gICAgICAgICAgICBob3Vyc1JlbWFpbjogbnVsbCxcclxuICAgICAgICAgICAgbWludXRlc1JlbWFpbjogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtaW51dGVzID0gNjAwMDAsXHJcbiAgICAgICAgICAgIGhvdXJzID0gbWludXRlcyAqNjAsXHJcbiAgICAgICAgICAgIGRheXMgPSBob3VycyAqIDI0O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsZWFkWmVybyhudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IG51bWJlciArICcnO1xyXG4gICAgICAgICAgICBpZihudW0ubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnMCcrIG51bTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbWFpbi5kYXlzUmVtYWluID0gbGVhZFplcm8oTWF0aC5mbG9vcihkaWZmIC8gZGF5cykpO1xyXG4gICAgICAgIHJlbWFpbi5ob3Vyc1JlbWFpbiA9IGxlYWRaZXJvKE1hdGguZmxvb3IoKGRpZmYgJSBkYXlzKSAvIGhvdXJzKSk7XHJcbiAgICAgICAgcmVtYWluLm1pbnV0ZXNSZW1haW4gPSBsZWFkWmVybyhNYXRoLmZsb29yKChkaWZmICUgaG91cnMpIC8gbWludXRlcykpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5cycpLmlubmVyVGV4dCA9IHJlbWFpbi5kYXlzUmVtYWluO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VycycpLmlubmVyVGV4dCA9IHJlbWFpbi5ob3Vyc1JlbWFpbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludXRlcycpLmlubmVyVGV4dCA9IHJlbWFpbi5taW51dGVzUmVtYWluO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY291bnRlciA9IHNldEludGVydmFsKHJlbWFpbmVkLCAxMDAwKTtcclxufSIsIjshZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb25ncmF0dWxhdGUnKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvdW50aW5nIHN1Ym1pdHMgPSBudW1iZXIgb2YgY29uZ3JhdHVsYXRpb25zXHJcbiAgICB2YXIgY29uZ3JhdENvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpO1xyXG4gICAgaWYgKGNvbmdyYXRDb3VudCA9PT0gbnVsbClcclxuICAgICAgY29uZ3JhdENvdW50ID0gMDtcclxuICAgIGNvbmdyYXRDb3VudCsrO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyZXhDb25ncmF0cycsIGNvbmdyYXRDb3VudCk7XHJcbiAgICAvL3NlbmQgZm9ybVxyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3Blbihmb3JtLm1ldGhvZCwgZm9ybS5hY3Rpb24sIHRydWUpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciByZXNwID0gbnVsbDtcclxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgIHJlc3AgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlc3A7XHJcbiAgICAgICAgdmFyIHRyZXhDb25ncmF0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmdyYXRzLWNvdW50Jyk7XHJcbiAgICAgICAgLy9jb3VudGluZyBjb25ncmF0dWxhdGlvbnMgYW5kIHN0b3JlIGludG8gY29udGFpbmVyXHJcbiAgICAgICAgY29uZ3JhdHNDb3VudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJleENvbmdyYXRzJyksIHRyZXhDb25ncmF0Q29udGFpbmVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd3JvbmcgcmVxdWVzdCcpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygncHJvYmxlbXMgb2Ygc29tZSBzb3J0Jyk7XHJcbiAgICB9O1xyXG4gICAgLy90b2RvIHZhbGlkYXRlIG9uIGtleXVwXHJcbiAgICBpZiAodmFsaWRhdGlvbihmb3JtKSkge1xyXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn0oKTtcclxuIiwiOyFmdW5jdGlvbigpIHtcclxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgdmFyIG1vZGFsT3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1vcGVuJyk7XHJcbiAgICB2YXIgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jbG9zZS1tb2RhbCcpO1xyXG4gICAgdmFyIGRvY0JvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgbW9kYWxPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaWYgKGRvY0JvZHkuY2xhc3NMaXN0KVxyXG4gICAgICAgICAgICBkb2NCb2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vZGFsLW9wZW4nKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGRvY0JvZHkuY2xhc3NOYW1lICs9ICcgaXMtbW9kYWwtb3Blbic7XHJcbiAgICB9KTtcclxuICAgIC8vdG9kbyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBvdmVybGF5XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoY2xvc2VNb2RhbEJ0biwgZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1tb2RhbC1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSgpOyIsIjshZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKSxcclxuICAgIG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpLFxyXG4gICAgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2JyksXHJcbiAgICBzbGlkZXMgPSBzbGlkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyksXHJcbiAgICBjb3VudGVyID0gMDtcclxuXHJcbiAgY29uc29sZS5sb2coc2xpZGVyKTtcclxuICBmdW5jdGlvbiBzaG93SW1hZ2UgKGluZGV4KSB7XHJcbiAgICAvLyBSZW1vdmUgYWxsIGNsYXNzbmFtZXMgb24gdGhlIHNsaWRlcyAoc28gaGlkZSB0aGVtKVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgIGlmIChzbGlkZXNbaV0uY2xhc3NMaXN0KVxyXG4gICAgICAgIHNsaWRlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgc2xpZGVzW2ldWydzbGlkZXJfX2l0ZW0tLWFjdGl2ZSddID0gc2xpZGVzW2ldWydzbGlkZXJfX2l0ZW0tLWFjdGl2ZSddLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArICdzbGlkZXJfX2l0ZW0tLWFjdGl2ZScuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBzaG93SW1hZ2UgY2xhc3NuYW1lIHRvIHRoZSBpbWctZWxlbWVudCB5b3Ugd2FudFxyXG4gICAgLy9zbGlkZXNbaW5kZXhdLmNsYXNzTmFtZSA9ICdzaG93SW1hZ2UnO1xyXG4gICAgaWYgKHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0KVxyXG4gICAgICBzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHNsaWRlc1tpbmRleF0uY2xhc3NOYW1lICs9ICcgc2xpZGVyX19pdGVtLS1hY3RpdmUnO1xyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIG5leHRJbWcgKCkge1xyXG4gICAgLy8gY291bnRlciB2YXJpYWJsZSBnZXRzIHRoZSBjdXJyZW50IGltZyBzZWxlY3RlZFxyXG4gICAgLy8gaWYgd2UgaGF2ZSB0aGUgbGFzdCBpbWcsIHdlIHN3aXRjaCBiYWNrIHRvIHRoZSBmaXJzdCBvbmUgYWdhaW5cclxuXHJcbiAgICBpZiAoY291bnRlciA8IHNsaWRlcy5sZW5ndGggLTEpIHtcclxuICAgICAgY291bnRlciArPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY291bnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ltYWdlKGNvdW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJldkltZyAoKSB7XHJcbiAgICAvLyBjb3VudGVyIHZhcmlhYmxlIGdldHMgdGhlIGN1cnJlbnQgaW1nIHNlbGVjdGVkXHJcbiAgICAvLyBpZiB3ZSBoYXZlIHRoZSBmaXJzdCBpbWcsIHdlIHN3aXRjaCBiYWNrIHRvIHRoZSBsYXN0IG9uZSBhZ2FpblxyXG5cclxuICAgIGlmIChjb3VudGVyID4gMCkge1xyXG4gICAgICBjb3VudGVyIC09IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb3VudGVyID0gc2xpZGVzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ltYWdlKGNvdW50ZXIpO1xyXG4gIH1cclxuXHJcbi8vICBJZiB5b3Ugd2FudCB0byBoYXZlIGFuIGF1dG8tc2xpZGVyLCB1bmNvbW1lbnQgdGhpczogXHJcbiAgd2luZG93LnNldEludGVydmFsKHByZXZJbWcsIDYwMDApO1xyXG5cclxuICAvLyBnaXZlIHRoZSBidXR0b25zIGFuIG9uY2xpY2sgZXZlbnRcclxuICBuZXh0QnRuLm9uY2xpY2sgPSBuZXh0SW1nO1xyXG4gIHByZXZCdG4ub25jbGljayA9IHByZXZJbWc7XHJcbn0oKTsiLCJmdW5jdGlvbiB2YWxpZGF0aW9uKGZvcm0pIHtcclxuICAgIHZhciBmb3JtQXJyYXkgPSBmb3JtLmVsZW1lbnRzO1xyXG4gICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgIHZhciBtZXNzYWdlID0gJ9CX0LDQv9C+0LvQvdC40YLQtSDRjdGC0L4g0L/QvtC70LUhJztcclxuICAgIHZhciBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZXJyb3JDb250YWluZXIuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmb3JtQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihmb3JtQXJyYXlbaV0uaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpICYmIGZvcm1BcnJheVtpXS52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICBpZiAoZm9ybUFycmF5W2ldLmNsYXNzTGlzdClcclxuICAgICAgICAgICAgICAgIGZvcm1BcnJheVtpXS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0LS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGZvcm1BcnJheVtpXS5jbGFzc05hbWUgKz0gJyBmb3JtLWlucHV0LS1pbnZhbGlkJztcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn0iLCJjb3VudGRvd24oJ1NlcHRlbWJlciAyNCwgMjAxNiAyNDowMDowMCcpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
