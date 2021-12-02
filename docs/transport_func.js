function funcstep(time){
  beatatual = beat % numsteps;
  beat++;
  
  //atualiza setLoopPoints c sliceatual
  let loopini = map(beatatual, 0, 4, 0, tempototal); 
  musica.setLoopPoints(loopini, loopini + temposlice);
  musica.fadeIn = 0.02;
  musica.fadeOut = 0.2;
  musica.start();
  console.log(loopini, loopini + temposlice);
  
}

function funcsteprnd(time){
  beatatual = int(random(0, 4));
  //beat++;
  
  //atualiza setLoopPoints c sliceatual
  let loopini = map(beatatual, 0, 4, 0, tempototal); 
  musica.setLoopPoints(loopini, loopini + temposlice);
  musica.fadeIn = 0.02;
  musica.fadeOut = 0.2;
  musica.start();
  console.log(loopini, loopini + temposlice);
  }

