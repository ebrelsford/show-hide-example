var toggleOne = document.querySelector('.toggle-one');
var toggleTwo = document.querySelector('.toggle-two');

var sectionOne = document.querySelector('.section-one');
var sectionTwo = document.querySelector('.section-two');

var sectionOneVisible = true;
var sectionTwoVisible = true;

toggleOne.addEventListener('click', function () {
  console.log('click', sectionOneVisible);
  if (sectionOneVisible) {
    sectionOneVisible = false;
    sectionOne.style.display = 'none';
  }
  else {
    sectionOneVisible = true;
    sectionOne.style.display = 'block';
  }
})

toggleTwo.addEventListener('click', function () {
  sectionTwo.style.display = 'none';
})