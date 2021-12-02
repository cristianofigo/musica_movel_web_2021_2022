let musica;
let trk1, trk2;

let trocas = false;

let tempototal, temposlice;

let li = 0;
let lf = 1;
let data = [];

let beatatual = 0;
let beat = 0;
let numsteps = 4;
let bpm = 125;
let playstart;
let playrandom;
Tone.Transport.bpm.value = bpm;
//Tone.Transport.scheduleRepeat(funcstep, "2m");

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
let sr = audioCtx.sampleRate;
console.log(sr);


function preload(){
  trk1 = new Tone.Player("bateria1.ogg").toDestination();
  trk2 = new Tone.Player("bateria2.ogg").toDestination();
  trk1.loop = true;
  trk2.loop = true;
    }

function setup() {
  createCanvas(300, 300);
   musica = trk2;
  
  playstart = createButton('play');
  playstart.position(0, 0);
  playstart.mouseClicked(funcplay);

  playrandom = createButton('play random');
  playrandom.position(0, 40);
  playrandom.mouseClicked(funcplayrnd);

  musica.toDestination();
    
  background(220);
  rect(100, 200, 200, 100); 
 }


function draw() {
  background(220);
  drawBuffer( 200, 100);
  
  tempototal = data.length/sr;
  temposlice = tempototal/4;
  
  //desenha slice atual com o beatatual
  let sliceatual = 100 + (beatatual*50);
      push();
       fill(0, 200, 0, 100);
       rect(sliceatual, 200, 50, 100);
       pop();
  
  
  //areas de loop em 4 slices
   for (let x = 100; x < 300; x = x + 50){
      push();
      fill(100 + x, 0 + x , 0 + x, 100);
      rect(x, 200, 50, 100 );
      pop();
   }
   }

function mouseClicked(){
    if(mouseY > 200 && mouseY < 300 && mouseX > 100){
      if(trocas == true){ 
        trocas = false;
        musica.stop();
        musica = trk2;
                        }
    else{ 
        trocas = true;
        musica.stop(0);
        musica = trk1;
        }
     }
}
