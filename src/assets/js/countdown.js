function countdown(toDate) {
    var final =  new Date(toDate);

    var remained = function() {
        var now = new Date();
        var diff = final - now;

        var remain = {
            daysRemain: null,
            hoursRemain: null,
            minutesRemain: null
        };

        var minutes = 60000,
            hours = minutes *60,
            days = hours * 24;

        function leadZero(number) {
            var num = number.toString();
            if(num.length <= 1) {
                return '0'+ num;
            } else {
                return num;
            }
        }

        remain.daysRemain = leadZero(Math.floor(diff / days));
        remain.hoursRemain = leadZero(Math.floor((diff % days) / hours));
        remain.minutesRemain = leadZero(Math.floor((diff % hours) / minutes));




        document.getElementById('days').innerText = remain.daysRemain;
        document.getElementById('hours').innerText = remain.hoursRemain;
        document.getElementById('minutes').innerText = remain.minutesRemain;
    };

    var counter = setInterval(remained, 1000);
}