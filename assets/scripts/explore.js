// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var synth =window.speechSynthesis;

  var voiceSelect = document.getElementById('voice-select');
  var inputTxt = document.getElementById('text-to-speak');
  var press_to_talk = document.querySelector('button');
  var picture = document.querySelector('img');
  var voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  press_to_talk.addEventListener('click',(event) =>{

    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    
    picture.setAttribute('src','assets/images/smiling-open.png');
    utterThis.addEventListener('end', function(event){
      picture.setAttribute('src','assets/images/smiling.png');
    });
    inputTxt.blur(); 
  });

}