'use strict';
/*form*/

!function () {
    var submit = document.getElementById('submit');
    var form = document.getElementById('form-congratulate');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var form = e.target;
        var request = new XMLHttpRequest();
        var data = new FormData(form);
        request.open(form.method, form.action);
        request.send(data);
        request.onload = function () {
            var resp = null;
            if (request.status >= 200 && request.status < 400) {
                resp = request.responseText;
                form.innerHTML = resp;
            } else {
                console.log('wrong request');
            }
        };
        request.onerror = function () {
            console.log('problems of some sort');
        };
    });
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBLENBQUMsWUFBVztBQUNSLFFBQUksU0FBUyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLFFBQUksT0FBTyxTQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLENBQVg7O0FBRUEsU0FBSyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFTLENBQVQsRUFBWTtBQUN4QyxVQUFFLGNBQUY7QUFDQSxZQUFJLE9BQU8sRUFBRSxNQUFiO0FBQ0EsWUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsWUFBSSxPQUFPLElBQUksUUFBSixDQUFhLElBQWIsQ0FBWDtBQUNBLGdCQUFRLElBQVIsQ0FBYSxLQUFLLE1BQWxCLEVBQTBCLEtBQUssTUFBL0I7QUFDQSxnQkFBUSxJQUFSLENBQWEsSUFBYjtBQUNBLGdCQUFRLE1BQVIsR0FBaUIsWUFBVTtBQUN2QixnQkFBSSxPQUFPLElBQVg7QUFDQSxnQkFBSSxRQUFRLE1BQVIsSUFBa0IsR0FBbEIsSUFBeUIsUUFBUSxNQUFSLEdBQWlCLEdBQTlDLEVBQW1EO0FBQy9DLHVCQUFPLFFBQVEsWUFBZjtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDSCxhQUhELE1BR087QUFDSCx3QkFBUSxHQUFSLENBQVksZUFBWjtBQUNIO0FBQ0osU0FSRDtBQVNBLGdCQUFRLE9BQVIsR0FBa0IsWUFBVztBQUN6QixvQkFBUSxHQUFSLENBQVksdUJBQVo7QUFDSCxTQUZEO0FBR0gsS0FuQkQ7QUFvQkgsQ0F4QkEsRUFBRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbi8qZm9ybSovXHJcblxyXG4hZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb25ncmF0dWxhdGUnKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm0gPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG4gICAgICAgIHJlcXVlc3Qub3Blbihmb3JtLm1ldGhvZCwgZm9ybS5hY3Rpb24pO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChkYXRhKTtcclxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciByZXNwID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgZm9ybS5pbm5lckhUTUwgPSByZXNwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dyb25nIHJlcXVlc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9ibGVtcyBvZiBzb21lIHNvcnQnKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0oKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
