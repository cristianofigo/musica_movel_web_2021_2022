function drawBuffer( audioxxx, posx, posy,width, height, beatatual, numstep, seqi, seqf) {
  let millisecond = millis();
  if (millisecond > 200){
   data = audioxxx.buffer.getChannelData( 0 );    
    let step = Math.ceil( data.length / width );
    let amp = height / 2;
    for(let i=0; i < width; i++){
        let min = 1.0;
        let max = -1.0;
        for (let j=0; j<step; j++) {
            let datum = data[(i*step)+j]; 
            if (datum < min)
                min = datum;
            if (datum > max)
                max = datum;
        }
        rect(i + posx,(1+min)*amp + posy,1,Math.max(1,(max-min)*amp));
      }
  }
  

  //desenha slice atual com o beatatual
  let sliceatual = posx + (beatatual * (width/numstep)); 
      push();
       fill(0, 200, 0, 100);
       rect(sliceatual, posy, (width/numstep), height);
       pop();
  
  
  //areas de loop em slices
   for (let x = posx; x < posx+width; x = x + (width/numstep)){
      push();
      fill(100 + x, 0 + x , 0 + x, 100);
      rect(x, posy, (width/numstep), height );
      pop();
   }
  
  //desenha loopslices
  let drawloopslicesx = posx + (seqi * (width/numstep));
  let drawloopslicelar = (((seqf - seqi) + 1  )*(width/numstep));
  push();
  //fill(0, 0, 100, 100);
  fill('#3B51AA6B');
  rect(drawloopslicesx, posy, drawloopslicelar, height);
  pop();

}