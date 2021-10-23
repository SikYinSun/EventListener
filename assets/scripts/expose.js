// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const jsConfetti = new JSConfetti();
  
  var picture = document.querySelector('#expose img');
  var volPicture = document.querySelector('#volume-controls img');
  var play_button = document.querySelector('button');
  var horn_sound = document.getElementsByClassName('hidden');
  var vol = document.getElementById('volume');
  var menu = document.getElementById('horn-select');

  menu.addEventListener('change', (event) =>{
    picture.setAttribute('src','assets/images/' + event.target.value +'.svg');
    horn_sound[0].setAttribute('src', 'assets/audio/'+ event.target.value +'.mp3');
  });

  play_button.addEventListener('click', (event) =>{
    horn_sound[0].play();
    if(menu.value == 'party-horn' && vol.value != 0) {
      jsConfetti.addConfetti();
    }
  });

  vol.addEventListener('input', (event) =>{
    if(event.target.value == 0){
      volPicture.setAttribute('src', 'assets/icons/volume-level-0.svg');
    }
    else if (event.target.value >=1 && event.target.value < 33) {
      volPicture.setAttribute('src', 'assets/icons/volume-level-1.svg');
  } else if (event.target.value >= 33 && event.target.value < 67) {
      volPicture.setAttribute('src', 'assets/icons/volume-level-2.svg');
  } else {
      volPicture.setAttribute('src', 'assets/icons/volume-level-3.svg');
  }
    horn_sound[0].volume = event.target.value / 100;
  });
}

