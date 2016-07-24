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