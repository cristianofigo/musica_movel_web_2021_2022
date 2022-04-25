//Teste Leon

let sceneNum = 0;

let slidervol1, slidervol2, slidervol3, slidervol4;

let numslices = 16;
let numtracks = 4;
let margeml = 50;
let margemr = 50;
let margemu = 50;
let margemd = 50;
let dist_vert_tracks = 10;
let altura;
let size_slice;
let audio1, audio2, audio3, audio4, audio5;
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];
let tempototal1, temposlice1;
let tempototal2, temposlice2;
let tempototal3, temposlice3;
let tempototal4, temposlice4;
let larg_tracks;
let alt_tracks;
let altura_telatotal;

let beatatual = 0;
let beat = 0;
let numsteps = 16;
let bpm = 125;
let playstart;
Tone.Transport.bpm.value = bpm;
Tone.Transport.scheduleRepeat(funcstep, "2m");
let sr = 44100;

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix
sr = audioCtx.sampleRate;
console.log(sr);

function preload(){
  /*
   audio1 = new Tone.Player("figo_loop1_0D_teclados.ogg");
   audio2 = new Tone.Player("figo_loop1_10_baixos.ogg");
   audio3 = new Tone.Player("figo_loop1_1E_bateria.ogg");
   audio4 = new Tone.Player("figo_loop1_1F_fx.ogg");
   
   audio1 = new Tone.Player("figo_loop2_0D_teclados.ogg");
   audio2 = new Tone.Player("figo_loop2_10_baixos.ogg");
   audio3 = new Tone.Player("figo_loop2_1E_bateria.ogg");
   audio4 = new Tone.Player("figo_loop2_1F_fx.ogg");
   
   audio1 =  new Tone.Player("figo_loop3_0D_teclados.ogg");
   audio2 = new Tone.Player("figo_loop3_10_baixos.ogg");
   audio3 = new Tone.Player("figo_loop3_1E_bateria.ogg");
   audio4 = new Tone.Player("figo_loop3_1F_fx.ogg");

    audio5 = new Tone.Player("figo_loop2_0D_teclados.ogg");
   audio6 = new Tone.Player("figo_loop2_10_baixos.ogg");
   audio7 = new Tone.Player("figo_loop2_1E_bateria.ogg");
   audio8 = new Tone.Player("figo_loop2_1F_fx.ogg");
   
   audio9 =  new Tone.Player("figo_loop3_0D_teclados.ogg");
   audio10 = new Tone.Player("figo_loop3_10_baixos.ogg");
   audio11 = new Tone.Player("figo_loop3_1E_bateria.ogg");
   audio12 = new Tone.Player("figo_loop3_1F_fx.ogg");
  
   */
  
   audio1 =  new Tone.Player("figo_loop4_0D_teclados.ogg");
   audio2 = new Tone.Player("figo_loop4_10_baixos.ogg");
   audio3 = new Tone.Player("figo_loop4_1E_bateria.ogg");
   audio4 = new Tone.Player("figo_loop4_1F_fx.ogg");
  
  
}

function setup() {
  createCanvas(600, 400);
  altura_telatotal = height;
  margeml = width/8;
  margemr = width/12;
  margemu = height/8;
  margemd =  height/8;
  
  audio1.toDestination();
  audio1.loop = true; //habilita loop  
  audio1.autostart = false; // liga o audio quando roda
  
  audio2.toDestination();
  audio2.loop = true; //habilita loop  
  audio2.autostart = false; // liga o audio quando roda
  
  audio3.toDestination();
  audio3.loop = true; //habilita loop  
  audio3.autostart = false; // liga o audio quando roda

  audio4.toDestination();
  audio4.loop = true; //habilita loop  
  audio4.autostart = false; // liga o audio quando roda
  
  playstart = createButton('play');
  playstart.position(0, height);
  playstart.mouseClicked(funcplay);
  
  slidervol1 = createSlider(-32, 12, 0);
  slidervol2 = createSlider(-32, 12, 0);
  slidervol3 = createSlider(-32, 12, 0);
  slidervol4 = createSlider(-32, 12, 0);
    
  //variaveis de desenho
  larg_tracks = width - (margeml + margemr);
  alt_tracks = (height/numtracks) - (dist_vert_tracks - 4);
 }  

function funcstep(time){
  beatatual = beat % numsteps;
  beat++;
  
  //atualiza setLoopPoints c sliceatual
 
  let loopini = map(beatatual, 0, numslices, 0, tempototal); 
  
  audio1.setLoopPoints(loopini, loopini + temposlice);
  audio1.fadeIn = 0.02;
  audio1.fadeOut = 0.2;
  audio1.start();
  
  audio2.setLoopPoints(loopini, loopini + temposlice);
  audio2.fadeIn = 0.02;
  audio2.fadeOut = 0.2;
  audio2.start();
  
  audio3.setLoopPoints(loopini, loopini + temposlice);
  audio3.fadeIn = 0.02;
  audio3.fadeOut = 0.2;
  audio3.start();
  
  audio4.setLoopPoints(loopini, loopini + temposlice);
  audio4.fadeIn = 0.02;
  audio4.fadeOut = 0.2;
  audio4.start();
  console.log(loopini, loopini + temposlice);
}

function funcplay(time){
  if(Tone.Transport.state == "started"){
    Tone.Transport.stop();
    audio1.stop();
    audio2.stop();
    audio3.stop();
    audio4.stop();
    playstart.html('play');
  }
  else{
    //if(samples.loaded){} //pra só deixar tocar se ja carregou samples
    Tone.Transport.start();
   // musica.start();
    playstart.html('stop');
  }
}

function draw() {
  //background(220);
  
  audio1.volume.value = slidervol1.value();
  audio2.volume.value = slidervol2.value();
  audio3.volume.value = slidervol3.value();
  audio4.volume.value = slidervol4.value();
  
  
  switch (sceneNum) {

    case 0:
      background(255);
      push();
      fill(0, 0, 100, 100);
      rect(0, 0, 50, 50); //botao muda cena
      pop();
      slidervol1.hide();
      slidervol2.hide();
      slidervol3.hide();
      slidervol4.hide();
      desenhaondas();
      console.log("cena 0");
      
      //desenha slice atual com o beatatual
      let sliceatual = margeml + (beatatual*size_slice);
      push();
      fill(0, 200, 0, 100);
      //noFill();
      rect(sliceatual, 200, size_slice, 100);
      pop(); 
      
      //esse vai pintando o slice anterior (falta pintar o último)
      push();
      fill(255, 255, 255, 2);
      noStroke();
      //noFill();
      rect(sliceatual - size_slice, 200, size_slice, 100);
      pop();
      
      if(beatatual === 0){
        
      push();
      fill(255, 255, 255, 2);
      noStroke();
      //noFill();
      rect(width - (margemr + size_slice), 200, size_slice, 100); 
      pop(); 
   }  
      
      
      break; // stop right here & exit

    case 1:
      background(220);
      push();
      fill(0, 0, 100, 100);
      rect(0, 0, 50, 50); //botao muda cena
      pop();
      console.log('scene 1');
      
      
      slidervol1.position(100, 100);
      slidervol1.show();
      slidervol2.position(100, 150);
      slidervol2.show();
      slidervol3.position(100, 200);
      slidervol3.show();
      slidervol4.position(100, 250);
      slidervol4.show();
      
      break;

    case 2:
      background(220, 20, 10);
      slidervol1.hide();
      slidervol2.hide();
      slidervol3.hide();
      slidervol4.hide();
      push();
      fill(0, 0, 100, 100);
      rect(0, 0, 50, 50); //botao muda cena
      pop();
      console.log('scene 2');
      
      push();
      fill(0);
      rect(150, 150, 30, 30); //desenha botão
      /*
      if(mouseX > 150 && mouseX < 180 && mouseY > 150 && mouseY < 180){
        audio1 = new Tone.Player("bateria2.ogg");
      }
      else {
        audio1 = new Tone.Player("bateria1.ogg");
      } */
      pop();

      break;

  }
  
    }

function mousePressed(){
  if(mouseX < 50 && mouseY < 50){
  sceneNum++;
  
  if (sceneNum == 3){
    sceneNum = 0;
  }
}
}


function desenhaondas(){
  drawBuffer(larg_tracks,alt_tracks , audio1, margeml, margemu);
  drawBuffer(larg_tracks,alt_tracks , audio2, margeml, margemu+alt_tracks);
  drawBuffer(larg_tracks,alt_tracks , audio3, margeml, margemu+(alt_tracks*2));
  drawBuffer(larg_tracks,alt_tracks , audio4, margeml, margemu+(alt_tracks*3));
  
  tempototal = data1.length/sr;
  temposlice = tempototal/16;
  
  
  
  for(let y = 0; y < numtracks; y++){ //cria 4 pistas
  let x =0;
    altura = (height/numtracks) - (dist_vert_tracks - 5);
    noFill();
 rect(x + margeml, (y * altura) + dist_vert_tracks, width - (margeml + margemr), altura);//desenha 4 pistas vazias
    for(let s = 0; s < numslices; s++){  //cria slices
      size_slice = ((width - (margeml + margemr)) / numslices);
      push();
      noFill();
      rect((s * size_slice) + margeml, (y * altura) + dist_vert_tracks, size_slice, altura ); //desenha slices
      pop();
    //  
      
           
  }
 }
}


function drawBuffer( width, height, audio, x, y) {
  let millisecond = millis();
  if (millisecond > 200){
   data1 = audio.buffer.getChannelData( 0 );    
    let step = Math.ceil( data1.length / width );
    let amp = height / 2.1;
    for(let i=0; i < width; i++){
        let min = 1.0;
        let max = -1.0;
        for (let j=0; j<step; j++) {
            let datum = data1[(i*step)+j]; 
            if (datum < min)
                min = datum;
            if (datum > max)
                max = datum;
        }
  rect(i + x, (0+min)*amp + (y+(altura_telatotal/45)),1,Math.max(1,(max-min)*amp));
      
    }
  }
}


   
