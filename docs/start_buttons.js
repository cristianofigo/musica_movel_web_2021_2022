function funcplay(time){
  if(Tone.Transport.state == "started"){
    musica.stop();
    Tone.Transport.stop();
    Tone.Transport.scheduleRepeat(funcstep, "1m");
    playstart.html('play');
  }
  else{
    Tone.Transport.scheduleRepeat(funcstep, "1m");
    Tone.Transport.start();
    playstart.html('stop');
  }
}

function funcplayrnd(time){
  if(Tone.Transport.state == "started"){
    musica.stop();
    Tone.Transport.stop();
  //  
    Tone.Transport.scheduleRepeat(funcsteprnd, "2m");
    playrandom.html('play random');
  }
  else{
    Tone.Transport.scheduleRepeat(funcsteprnd, "2m");
    Tone.Transport.start();
   // musica.start();
    playrandom.html('stop');
  }
}

