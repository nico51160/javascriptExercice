
const BODY = document.querySelector('body');

window.addEventListener('scroll', function() {
    let y = window.scrollY;
      if(y > 500) {
         BODY.style.backgroundColor = 'red';
      } else {
        BODY.style.backgroundColor = 'white';
      }

});