function drawBuffer( width, height) {
  let millisecond = millis();
  if (millisecond > 200){
   data = musica.buffer.getChannelData( 0 );    
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
        rect(i + 100,(1+min)*amp + 200,1,Math.max(1,(max-min)*amp));
      }
  }
}