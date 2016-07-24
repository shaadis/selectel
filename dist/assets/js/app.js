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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdyYXRzLWNvdW50LmpzIiwiY291bnRkb3duLmpzIiwiZm9ybS5qcyIsIm1vZGFsLmpzIiwidmFsaWRhdGlvbi5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxTQUFoQyxFQUEyQztBQUN6QyxNQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQSxNQUFJLFFBQVEsU0FBUixLQUFRLENBQVMsT0FBVCxFQUFrQjtBQUM1QixRQUFJLFNBQVMsY0FBYjtBQUNBLFFBQUcsVUFBUSxHQUFSLEdBQWMsRUFBZCxJQUFvQixVQUFRLEdBQVIsR0FBYyxFQUFyQyxFQUF5QztBQUN4QyxjQUFRLFVBQVEsRUFBaEI7QUFDRSxhQUFLLENBQUw7QUFBUSxtQkFBUyxjQUFULENBQXlCO0FBQ2pDLGFBQUssQ0FBTDtBQUNBLGFBQUssQ0FBTDtBQUNBLGFBQUssQ0FBTDtBQUFRLG1CQUFTLGNBQVQsQ0FBeUI7QUFKbkM7QUFNQTtBQUNELFdBQU8sTUFBUDtBQUNELEdBWEQ7QUFZQTtBQUNBLE9BQUssU0FBTCxHQUFnQixnQkFBaEI7QUFDQSxPQUFLLFNBQUwsR0FBaUIsVUFBVSxHQUFWLEdBQWdCLE1BQU0sT0FBTixDQUFqQztBQUNBLFlBQVUsV0FBVixDQUFzQixJQUF0QjtBQUNEOzs7QUNsQkQsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ3ZCLFFBQUksUUFBUyxJQUFJLElBQUosQ0FBUyxNQUFULENBQWI7O0FBRUEsUUFBSSxXQUFXLFNBQVgsUUFBVyxHQUFXO0FBQ3RCLFlBQUksTUFBTSxJQUFJLElBQUosRUFBVjtBQUNBLFlBQUksT0FBTyxRQUFRLEdBQW5COztBQUVBLFlBQUksU0FBUztBQUNULHdCQUFZLElBREg7QUFFVCx5QkFBYSxJQUZKO0FBR1QsMkJBQWU7QUFITixTQUFiOztBQU1BLFlBQUksVUFBVSxLQUFkO0FBQUEsWUFDSSxRQUFRLFVBQVMsRUFEckI7QUFBQSxZQUVJLE9BQU8sUUFBUSxFQUZuQjs7QUFJQSxpQkFBUyxRQUFULENBQWtCLE1BQWxCLEVBQTBCO0FBQ3RCLGdCQUFJLE1BQU0sU0FBUyxFQUFuQjtBQUNBLGdCQUFHLElBQUksTUFBSixJQUFjLENBQWpCLEVBQW9CO0FBQ2hCLHVCQUFPLE1BQUssR0FBWjtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLEdBQVA7QUFDSDtBQUNKOztBQUVELGVBQU8sVUFBUCxHQUFvQixTQUFTLEtBQUssS0FBTCxDQUFXLE9BQU8sSUFBbEIsQ0FBVCxDQUFwQjtBQUNBLGVBQU8sV0FBUCxHQUFxQixTQUFTLEtBQUssS0FBTCxDQUFZLE9BQU8sSUFBUixHQUFnQixLQUEzQixDQUFULENBQXJCO0FBQ0EsZUFBTyxhQUFQLEdBQXVCLFNBQVMsS0FBSyxLQUFMLENBQVksT0FBTyxLQUFSLEdBQWlCLE9BQTVCLENBQVQsQ0FBdkI7O0FBS0EsaUJBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxTQUFoQyxHQUE0QyxPQUFPLFVBQW5EO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixPQUF4QixFQUFpQyxTQUFqQyxHQUE2QyxPQUFPLFdBQXBEO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixTQUF4QixFQUFtQyxTQUFuQyxHQUErQyxPQUFPLGFBQXREO0FBQ0gsS0FqQ0Q7O0FBbUNBLFFBQUksVUFBVSxZQUFZLFFBQVosRUFBc0IsSUFBdEIsQ0FBZDtBQUNIOzs7QUN2Q0QsQ0FBQyxDQUFDLFlBQVk7QUFDWixNQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxNQUFJLE9BQU8sU0FBUyxjQUFULENBQXdCLG1CQUF4QixDQUFYO0FBQ0EsT0FBSyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFVLENBQVYsRUFBYTtBQUMzQyxNQUFFLGNBQUY7QUFDQTtBQUNBLFFBQUksZUFBZSxhQUFhLE9BQWIsQ0FBcUIsY0FBckIsQ0FBbkI7QUFDQSxRQUFJLGlCQUFpQixJQUFyQixFQUNFLGVBQWUsQ0FBZjtBQUNGO0FBQ0EsaUJBQWEsT0FBYixDQUFxQixjQUFyQixFQUFxQyxZQUFyQztBQUNBO0FBQ0EsUUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsWUFBUSxJQUFSLENBQWEsS0FBSyxNQUFsQixFQUEwQixLQUFLLE1BQS9CLEVBQXVDLElBQXZDO0FBQ0EsWUFBUSxNQUFSLEdBQWlCLFlBQVk7QUFDM0IsVUFBSSxPQUFPLElBQVg7QUFDQSxVQUFJLFFBQVEsTUFBUixJQUFrQixHQUFsQixJQUF5QixRQUFRLE1BQVIsR0FBaUIsR0FBOUMsRUFBbUQ7QUFDakQsZUFBTyxRQUFRLFlBQWY7QUFDQSxpQkFBUyxjQUFULENBQXdCLFlBQXhCLEVBQXNDLFNBQXRDLEdBQWtELElBQWxEO0FBQ0EsWUFBSSx1QkFBdUIsU0FBUyxjQUFULENBQXdCLGdCQUF4QixDQUEzQjtBQUNBO0FBQ0Esc0JBQWMsYUFBYSxPQUFiLENBQXFCLGNBQXJCLENBQWQsRUFBb0Qsb0JBQXBEO0FBQ0QsT0FORCxNQU1PO0FBQ0wsZ0JBQVEsR0FBUixDQUFZLGVBQVo7QUFDRDtBQUNGLEtBWEQ7QUFZQSxZQUFRLE9BQVIsR0FBa0IsWUFBWTtBQUM1QixjQUFRLEdBQVIsQ0FBWSx1QkFBWjtBQUNELEtBRkQ7QUFHQTtBQUNBLFFBQUksV0FBVyxJQUFYLENBQUosRUFBc0I7QUFDcEIsY0FBUSxJQUFSO0FBQ0Q7QUFFRixHQS9CRDtBQWdDRCxDQW5DQyxFQUFEOzs7QUNBRCxDQUFDLENBQUMsWUFBVztBQUNULFFBQUksUUFBUSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWjtBQUNBLFFBQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQSxRQUFJLGdCQUFnQixTQUFTLGdCQUFULENBQTBCLGlCQUExQixDQUFwQjtBQUNBLFFBQUksVUFBVSxTQUFTLElBQXZCO0FBQ0EsaUJBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBVztBQUM5QyxjQUFNLEtBQU4sQ0FBWSxPQUFaLEdBQXNCLE9BQXRCO0FBQ0EsWUFBSSxRQUFRLFNBQVosRUFDSSxRQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsZUFBdEIsRUFESixLQUdJLFFBQVEsU0FBUixJQUFxQixnQkFBckI7QUFDUCxLQU5EO0FBT0E7QUFDQSxPQUFHLE9BQUgsQ0FBVyxJQUFYLENBQWdCLGFBQWhCLEVBQStCLFVBQVMsSUFBVCxFQUFlO0FBQzFDLGFBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0QyxrQkFBTSxLQUFOLENBQVksT0FBWixHQUFzQixNQUF0QjtBQUNBLG9CQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsZUFBekI7QUFDSCxTQUhEO0FBSUgsS0FMRDtBQU1ILENBbkJDLEVBQUQ7OztBQ0FELFNBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtBQUN0QixRQUFJLFlBQVksS0FBSyxRQUFyQjtBQUNBLFFBQUksUUFBUSxJQUFaO0FBQ0EsUUFBSSxVQUFVLHFCQUFkO0FBQ0EsUUFBSSxpQkFBaUIsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0EsbUJBQWUsU0FBZixHQUEyQixPQUEzQjtBQUNBLFNBQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLFVBQVUsTUFBN0IsRUFBcUMsR0FBckMsRUFBMEM7QUFDdEMsWUFBRyxVQUFVLENBQVYsRUFBYSxZQUFiLENBQTBCLFVBQTFCLEtBQXlDLFVBQVUsQ0FBVixFQUFhLEtBQWIsSUFBc0IsRUFBbEUsRUFBc0U7QUFDbEUsZ0JBQUksVUFBVSxDQUFWLEVBQWEsU0FBakIsRUFDSSxVQUFVLENBQVYsRUFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLHFCQUEzQixFQURKLEtBR0ksVUFBVSxDQUFWLEVBQWEsU0FBYixJQUEwQixzQkFBMUI7QUFDSixvQkFBUSxLQUFSO0FBQ0g7QUFDSjtBQUNELFdBQU8sS0FBUDtBQUNIOzs7QUNoQkQsVUFBVSw2QkFBViIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb25ncmF0c0NvdW50KGNvbmdyYXQsIGNvbnRhaW5lcikge1xyXG4gIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHZhciBncmFtbSA9IGZ1bmN0aW9uKGNvbmdyYXQpIHtcclxuICAgIHZhciBzdHJpbmcgPSAn0L/QvtC30LTRgNCw0LLQu9C10L3QuNC5JztcclxuICAgIGlmKGNvbmdyYXQlMTAwIDwgMTEgfHwgY29uZ3JhdCUxMDAgPiAxNCkge1xyXG4gICAgIHN3aXRjaCAoY29uZ3JhdCUxMCkge1xyXG4gICAgICAgY2FzZSAxOiBzdHJpbmcgPSAn0L/QvtC30LTRgNCw0LLQu9C10L3QuNC1JzsgYnJlYWs7XHJcbiAgICAgICBjYXNlIDI6XHJcbiAgICAgICBjYXNlIDM6XHJcbiAgICAgICBjYXNlIDQ6IHN0cmluZyA9ICfQv9C+0LfQtNGA0LDQstC70LXQvdC40Y8nOyBicmVhaztcclxuICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG4gIH07XHJcbiAgLy90b2RvIHNlcGFyYXRlIHNwYW4gYW5kIHdvcmQgXCJncmFtbVwiXHJcbiAgc3Bhbi5jbGFzc05hbWU9ICdjb25ncmF0cy1jb3VudCc7XHJcbiAgc3Bhbi5pbm5lckhUTUwgPSBjb25ncmF0ICsgJyAnICsgZ3JhbW0oY29uZ3JhdCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xyXG59IiwiZnVuY3Rpb24gY291bnRkb3duKHRvRGF0ZSkge1xyXG4gICAgdmFyIGZpbmFsID0gIG5ldyBEYXRlKHRvRGF0ZSk7XHJcblxyXG4gICAgdmFyIHJlbWFpbmVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRpZmYgPSBmaW5hbCAtIG5vdztcclxuXHJcbiAgICAgICAgdmFyIHJlbWFpbiA9IHtcclxuICAgICAgICAgICAgZGF5c1JlbWFpbjogbnVsbCxcclxuICAgICAgICAgICAgaG91cnNSZW1haW46IG51bGwsXHJcbiAgICAgICAgICAgIG1pbnV0ZXNSZW1haW46IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWludXRlcyA9IDYwMDAwLFxyXG4gICAgICAgICAgICBob3VycyA9IG1pbnV0ZXMgKjYwLFxyXG4gICAgICAgICAgICBkYXlzID0gaG91cnMgKiAyNDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbGVhZFplcm8obnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSBudW1iZXIgKyAnJztcclxuICAgICAgICAgICAgaWYobnVtLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzAnKyBudW07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW1haW4uZGF5c1JlbWFpbiA9IGxlYWRaZXJvKE1hdGguZmxvb3IoZGlmZiAvIGRheXMpKTtcclxuICAgICAgICByZW1haW4uaG91cnNSZW1haW4gPSBsZWFkWmVybyhNYXRoLmZsb29yKChkaWZmICUgZGF5cykgLyBob3VycykpO1xyXG4gICAgICAgIHJlbWFpbi5taW51dGVzUmVtYWluID0gbGVhZFplcm8oTWF0aC5mbG9vcigoZGlmZiAlIGhvdXJzKSAvIG1pbnV0ZXMpKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheXMnKS5pbm5lclRleHQgPSByZW1haW4uZGF5c1JlbWFpbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnMnKS5pbm5lclRleHQgPSByZW1haW4uaG91cnNSZW1haW47XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbnV0ZXMnKS5pbm5lclRleHQgPSByZW1haW4ubWludXRlc1JlbWFpbjtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvdW50ZXIgPSBzZXRJbnRlcnZhbChyZW1haW5lZCwgMTAwMCk7XHJcbn0iLCI7IWZ1bmN0aW9uICgpIHtcclxuICB2YXIgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG4gIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29uZ3JhdHVsYXRlJyk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jb3VudGluZyBzdWJtaXRzID0gbnVtYmVyIG9mIGNvbmdyYXR1bGF0aW9uc1xyXG4gICAgdmFyIGNvbmdyYXRDb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmV4Q29uZ3JhdHMnKTtcclxuICAgIGlmIChjb25ncmF0Q291bnQgPT09IG51bGwpXHJcbiAgICAgIGNvbmdyYXRDb3VudCA9IDA7XHJcbiAgICBjb25ncmF0Q291bnQrKztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmV4Q29uZ3JhdHMnLCBjb25ncmF0Q291bnQpO1xyXG4gICAgLy9zZW5kIGZvcm1cclxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oZm9ybS5tZXRob2QsIGZvcm0uYWN0aW9uLCB0cnVlKTtcclxuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgcmVzcCA9IG51bGw7XHJcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICByZXNwID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXNwO1xyXG4gICAgICAgIHZhciB0cmV4Q29uZ3JhdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25ncmF0cy1jb3VudCcpO1xyXG4gICAgICAgIC8vY291bnRpbmcgY29uZ3JhdHVsYXRpb25zIGFuZCBzdG9yZSBpbnRvIGNvbnRhaW5lclxyXG4gICAgICAgIGNvbmdyYXRzQ291bnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpLCB0cmV4Q29uZ3JhdENvbnRhaW5lcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dyb25nIHJlcXVlc3QnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3Byb2JsZW1zIG9mIHNvbWUgc29ydCcpO1xyXG4gICAgfTtcclxuICAgIC8vdG9kbyB2YWxpZGF0ZSBvbiBrZXl1cFxyXG4gICAgaWYgKHZhbGlkYXRpb24oZm9ybSkpIHtcclxuICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG59KCk7XHJcbiIsIjshZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIHZhciBtb2RhbE9wZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtb3BlbicpO1xyXG4gICAgdmFyIGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xvc2UtbW9kYWwnKTtcclxuICAgIHZhciBkb2NCb2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIG1vZGFsT3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGlmIChkb2NCb2R5LmNsYXNzTGlzdClcclxuICAgICAgICAgICAgZG9jQm9keS5jbGFzc0xpc3QuYWRkKCdpcy1tb2RhbC1vcGVuJyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkb2NCb2R5LmNsYXNzTmFtZSArPSAnIGlzLW1vZGFsLW9wZW4nO1xyXG4gICAgfSk7XHJcbiAgICAvL3RvZG8gY2xvc2UgbW9kYWwgYnkgY2xpY2tpbmcgb3ZlcmxheVxyXG4gICAgW10uZm9yRWFjaC5jYWxsKGNsb3NlTW9kYWxCdG4sIGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY0JvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbW9kYWwtb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0oKTsiLCJmdW5jdGlvbiB2YWxpZGF0aW9uKGZvcm0pIHtcclxuICAgIHZhciBmb3JtQXJyYXkgPSBmb3JtLmVsZW1lbnRzO1xyXG4gICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgIHZhciBtZXNzYWdlID0gJ9CX0LDQv9C+0LvQvdC40YLQtSDRjdGC0L4g0L/QvtC70LUhJztcclxuICAgIHZhciBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZXJyb3JDb250YWluZXIuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmb3JtQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihmb3JtQXJyYXlbaV0uaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpICYmIGZvcm1BcnJheVtpXS52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICBpZiAoZm9ybUFycmF5W2ldLmNsYXNzTGlzdClcclxuICAgICAgICAgICAgICAgIGZvcm1BcnJheVtpXS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0LS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGZvcm1BcnJheVtpXS5jbGFzc05hbWUgKz0gJyBmb3JtLWlucHV0LS1pbnZhbGlkJztcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn0iLCJjb3VudGRvd24oJ1NlcHRlbWJlciAyNCwgMjAxNiAyNDowMDowMCcpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
