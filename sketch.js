let gui;
let b;//play transport global
let s; //slider BPM
let f1, f2, f3, f4; //slider nº fatias (tem q ser por canal)
let play1, play2, play3, play4;//play de cada canal
let audio1, audio2, audio3, audio4; //tone.player cada canal
let data1 = [];
let data2 =[];
let data3 = [];
let data4 = []; //array de audio
let sequencia1 = [];
let sequencia2 = [];
let sequencia3 = [];
let sequencia4 = [];
let pontosloops1 = [];
let pontosloops2 = [];
let pontosloops3 = [];
let pontosloops4 = [];

let loopslices1 = [];
let loopslices2 = [];
let loopslices3 = [];
let loopslices4 = [];
let randloops1 =[];
let randloops2 =[];
let randloops3 =[];
let randloops4 =[];
let loopsleitura1 = [];
let loopsleitura2 = [];
let loopsleitura3 = [];
let loopsleitura4 = [];
let botrand1, botrand2, botrand3, botrand4;//aciona random p cada canal
let indexseq1 = 0;
let indexseq2 = 0;
let indexseq3 = 0;
let indexseq4 = 0;//reset loop contador
let tempoaudio1, tempoaudio2, tempoaudio3, tempoaudio4; //sample em segundos
let temposlice1, temposlice2, temposlice3, temposlice4;
let numsteps1 = 8;
let numsteps2 = 8;
let numsteps3 = 8;
let numsteps4 = 8;
let maxsteps = 64;
let BPM = 0;
let modBPM = 1;
let beatatual1 = 0;
let beatatual2 = 0;
let beatatual3 = 0;
let beatatual4 = 0;
let seqinicio1 = 2;
let seqinicio2 = 2;
let seqinicio3 = 2;
let seqinicio4 = 2;
let seqfim1 = 6;
let seqfim2 = 6;
let seqfim3 = 6;
let seqfim4 = 6;
let seqoffset1 = 0;
let seqoffset2 = 0;
let seqoffset3 = 0;
let seqoffset4 = 0;
let sliderseqi1, sliderseqi2, sliderseqi3, sliderseqi4;
let sliderseqf1, sliderseqf2, sliderseqf3, sliderseqf4;
let cntrlfiltro, filtro, onfiltro;
let sectimeline, lockscore1, lockscore2, lockscore3, lockscore4;
let estilo_slider1 = {};
let mixer1, mixer2, mixer3, mixer4;

let c_waves = true;
let c_audios = false;
let c_mixer = false;
let c_fx = false;
let c_aboutmusica = false;
let c_aboutmm = false;
let cena = 0;
let myFont;
let w, h;

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
let sr = audioCtx.sampleRate;
console.log(sr);

function preload(){
  myFont = loadFont("TT2020Base-Regular.ttf");
  filtro = new Tone.Filter(0, "bandpass");
  audio1 = new Tone.Player('audios/bateria1.ogg').toDestination();
  audio2 = new Tone.Player('audios/baixo1.ogg').toDestination();

}

function setup(){
  //audio1.chain(filtro, Tone.Destination);
  //audio2.chain(filtro, Tone.Destination);
  //audio1.chain(Tone.Destination);
  //audio2.chain(Tone.Destination);

  createCanvas(windowWidth, windowHeight);
  w = width;
  h = height;

  gui = createGui();
  estilos();
  menu();
  botoes_ondas();
  botoes_audios();
  botoes_mixer();
  botoes_fx();

  gui.setFont(myFont);
  gui.setTextSize((h + w)/52);


}


function draw(){
  background("#37BA91A0BF");
  drawGui();

  sectimeline = Tone.Transport.position;
  let millisecond = millis();
  if (millisecond > 200) {
     data1 = audio1.buffer.getChannelData(0);
     data2 = audio2.buffer.getChannelData(0);
      }
  tempoaudio1 = data1.length / sr;
  temposlice1 = tempoaudio1 / numsteps1;
  BPM = 60 / temposlice1;
  tempoaudio2 = data2.length / sr;
  temposlice2 = tempoaudio2 / numsteps2;
  scoretimeline();
  // /* atualizações e limites dos sliders de loop
   if(sliderseqf1.val >= numsteps1){
    sliderseqf1.val = numsteps1 - 1;
      }
   if(sliderseqi1.val == sliderseqf1.val){
    sliderseqi1.val = sliderseqf1.val - 1;
      }
   if(sliderseqf1.val == sliderseqi1.val){
    sliderseqf1.val = sliderseqi1.val + 1;
    }

  sliderseqi1.max = numsteps1;
  sliderseqf1.max = numsteps1;
  seqinicio1 = sliderseqi1.val;
  seqfim1 = sliderseqf1.val;
  ///
   if(sliderseqf2.val >= numsteps2){
    sliderseqf2.val = numsteps2 - 1;
      }
   if(sliderseqi2.val == sliderseqf2.val){
    sliderseqi2.val = sliderseqf2.val - 1;
      }
   if(sliderseqf2.val == sliderseqi2.val){
    sliderseqf2.val = sliderseqi2.val + 1;
    }

  sliderseqi2.max = numsteps2;
  sliderseqf2.max = numsteps2;
  seqinicio2 = sliderseqi2.val;
  seqfim2 = sliderseqf2.val;
  //
  atualizatempos();

  switch (cena) {

    case 0:
      ondas();

      break;

      case 1:
      audios();
      break;

      case 2:
      mixer();
      break;

      case 3:
      fx();
      break;

      case 4:
      sobre();
      break;

      case 5:
      mm();
      break;

    }
}

function atualizatempos(){
  //canal1
    for (let x = 0; x < numsteps1; x++) { //cria sequencia
    sequencia1[x] = x;
  }
    for (let l = 0; l < numsteps1 * 2; l++) {//sequencia loopoints;
     pontosloops1[l] = temposlice1 * l;
  }
     loopslices1 = sequencia1.slice(seqinicio1, seqfim1+1);//loop de slices
      if (botrand1.val == true){
       loopslices1 = shuffle(loopslices1);
  }
  //canal 2
  for (let x = 0; x < numsteps2; x++) { //cria sequencia
    sequencia2[x] = x;
  }
    for (let l = 0; l < numsteps2 * 2; l++) {//sequencia loopoints;
     pontosloops2[l] = temposlice2 * l;
  }
     loopslices2 = sequencia2.slice(seqinicio2, seqfim2+1);//loop de slices
      if (botrand2.val == true){
       loopslices2 = shuffle(loopslices2);
  }
     }

function ondas(){
  text("Play", w/6, h/6, 24 );
  //function drawBuffer( audioxxx, posx, posy,width, height, beatatual, numstep, seqi, seqf)
  drawBuffer(audio1, (w/6), (h/6)*2,  w/1.25, h/8, beatatual1, numsteps1, seqinicio1, seqfim1);
  drawBuffer(audio2, (w/6), (h/6)*3,  w/1.25, h/8, beatatual2, numsteps2, seqinicio2, seqfim2);
}


function audios(){
 ellipse(w/2, h/2, 20, 20);
}

function mixer(){

}

function fx(){

}

function sobre(){

}

function mm(){

}

const loop1 = new Tone.Loop((time) => {
  indexseq1++;
  indexseq1 = indexseq1 % loopslices1.length;
  let sliceatual = loopslices1[indexseq1];
  beatatual1 = sliceatual;
  //console.log(sliceatual);
  let proxslice = sliceatual + 1;
  audio1.stop();
  audio1.loop = true;
  audio1.setLoopPoints(pontosloops1[sliceatual], pontosloops1[proxslice]);
  audio1.fadeIn = 0.02;
  audio1.fadeOut = 0.02;
  audio1.start();
}, temposlice1).start(); //o segredo está aqui em temposlice1 q pode ser substituido por qqer valor de tempo

const loop2 = new Tone.Loop((time) => {
  indexseq2++;
  indexseq2 = indexseq2 % loopslices2.length;
  let sliceatual = loopslices2[indexseq2];
  beatatual2 = sliceatual;
  //console.log(sliceatual);
  let proxslice = sliceatual + 1;
  audio2.stop();
  audio2.loop = true;
  audio2.setLoopPoints(pontosloops2[sliceatual], pontosloops2[proxslice]);
  audio2.fadeIn = 0.02;
  audio2.fadeOut = 0.02;
  audio2.start();
}, temposlice2).start(); //o segredo está aqui em temposlice2 q pode ser substituido por qqer valor de tempo

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
