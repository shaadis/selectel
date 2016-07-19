'use strict';
/*form*/

!function () {
    var submit = document.getElementById('submit');
    var form = document.getElementById('form-congratulate');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        //counting submits
        var congratCount = localStorage.getItem('trexCongrats');
        if (congratCount === null) {
            congratCount = 0;
        }
        congratCount++;
        localStorage.setItem('trexCongrats', congratCount);

        //send form
        var request = new XMLHttpRequest();
        request.open(form.method, form.action, true);

        request.onload = function () {
            var resp = null;
            if (request.status >= 200 && request.status < 400) {
                resp = request.responseText;
                form.innerHTML = resp;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBLENBQUMsWUFBVztBQUNSLFFBQUksU0FBUyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLFFBQUksT0FBTyxTQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLENBQVg7O0FBR0EsU0FBSyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFTLENBQVQsRUFBWTtBQUN4QyxVQUFFLGNBQUY7QUFDQTtBQUNBLFlBQUksZUFBZSxhQUFhLE9BQWIsQ0FBcUIsY0FBckIsQ0FBbkI7QUFDQSxZQUFHLGlCQUFpQixJQUFwQixFQUEwQjtBQUN0QiwyQkFBZSxDQUFmO0FBQ0g7QUFDRDtBQUNBLHFCQUFhLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsWUFBckM7O0FBRUE7QUFDQSxZQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxnQkFBUSxJQUFSLENBQWEsS0FBSyxNQUFsQixFQUEwQixLQUFLLE1BQS9CLEVBQXVDLElBQXZDOztBQUdBLGdCQUFRLE1BQVIsR0FBaUIsWUFBVTtBQUN2QixnQkFBSSxPQUFPLElBQVg7QUFDQSxnQkFBSSxRQUFRLE1BQVIsSUFBa0IsR0FBbEIsSUFBeUIsUUFBUSxNQUFSLEdBQWlCLEdBQTlDLEVBQW1EO0FBQy9DLHVCQUFPLFFBQVEsWUFBZjtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxvQkFBSSx1QkFBdUIsU0FBUyxjQUFULENBQXdCLGdCQUF4QixDQUEzQjtBQUNBLHFDQUFxQixTQUFyQixHQUFpQyxhQUFhLE9BQWIsQ0FBcUIsY0FBckIsQ0FBakM7QUFDSCxhQUxELE1BS087QUFDSCx3QkFBUSxHQUFSLENBQVksZUFBWjtBQUNIO0FBQ0osU0FWRDtBQVdBLGdCQUFRLE9BQVIsR0FBa0IsWUFBVztBQUN6QixvQkFBUSxHQUFSLENBQVksdUJBQVo7QUFDSCxTQUZEO0FBR0EsZ0JBQVEsSUFBUjtBQUNILEtBOUJEO0FBK0JILENBcENBLEVBQUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG4vKmZvcm0qL1xyXG5cclxuIWZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29uZ3JhdHVsYXRlJyk7XHJcblxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvL2NvdW50aW5nIHN1Ym1pdHNcclxuICAgICAgICB2YXIgY29uZ3JhdENvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpO1xyXG4gICAgICAgIGlmKGNvbmdyYXRDb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25ncmF0Q291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25ncmF0Q291bnQrKztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHJleENvbmdyYXRzJywgY29uZ3JhdENvdW50KTtcclxuXHJcbiAgICAgICAgLy9zZW5kIGZvcm1cclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3Blbihmb3JtLm1ldGhvZCwgZm9ybS5hY3Rpb24sIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgcmVzcCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3AgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGZvcm0uaW5uZXJIVE1MID0gcmVzcDtcclxuICAgICAgICAgICAgICAgIHZhciB0cmV4Q29uZ3JhdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25ncmF0cy1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgdHJleENvbmdyYXRDb250YWluZXIuaW5uZXJUZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyZXhDb25ncmF0cycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dyb25nIHJlcXVlc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9ibGVtcyBvZiBzb21lIHNvcnQnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgfSk7XHJcbn0oKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
