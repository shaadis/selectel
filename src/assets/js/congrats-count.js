function congratsCount(congrat, container) {
  var span = document.createElement('span');
  var gramm = function(congrat) {
    var string = 'поздравлений';
    if(congrat%100 < 11 || congrat%100 > 14) {
     switch (congrat%10) {
       case 1: string = 'поздравление'; break;
       case 2:
       case 3:
       case 4: string = 'поздравления'; break;
     }
    }
    return string;
  };
  //todo separate span and word "gramm"
  span.className= 'congrats-count';
  span.innerHTML = congrat + ' ' + gramm(congrat);
  container.appendChild(span);
}