document.addEventListener('keydown', (e)=> {
   //  const audio = document.querySelector(`audio[data-key="${e.code}]"`);
    const audio = document.querySelector(`audio[data-key='${e.key}']`);
   if(!audio) return;
    audio.play() 
    console.log(audio);
    
  });