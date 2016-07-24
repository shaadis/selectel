;!function() {
  var slider = document.getElementById('slider'),
    nextBtn = document.getElementById('next'),
    prevBtn = document.getElementById('prev'),
    slides = slider.getElementsByTagName('li'),
    counter = 0;

  console.log(slider);
  function showImage (index) {
    // Remove all classnames on the slides (so hide them)
    for (var i = 0; i < slides.length; i++) {

      if (slides[i].classList)
        slides[i].classList.remove('slider__item--active');
      else
        slides[i]['slider__item--active'] = slides[i]['slider__item--active'].replace(new RegExp('(^|\\b)' + 'slider__item--active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    // Add the showImage classname to the img-element you want
    //slides[index].className = 'showImage';
    if (slides[index].classList)
      slides[index].classList.add('slider__item--active');
    else
      slides[index].className += ' slider__item--active';
  }


  function nextImg () {
    // counter variable gets the current img selected
    // if we have the last img, we switch back to the first one again

    if (counter < slides.length -1) {
      counter += 1;
    } else {
      counter = 0;
    }

    showImage(counter);
  }

  function prevImg () {
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