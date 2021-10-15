let beat = 0;
let beatatual = 0;
let kit = new Tone.Players({
  "kick": "samples/505/AFO01120.WAV",
  "snare": "samples/505/PAN12120.WAV",
  "paudechuva" : "samples/505/PDCHUV1.WAV",
  "sino" : "samples/505/SIN01085.WAV",
  "tanta" : "samples/505/TAN07120.WAV"
});

let kitname = ["kick","snare","paudechuva", "sino", "tanta" ];
let rndaudio;

kit.toMaster();

Tone.Transport.bpm.value = 60;
Tone.Transport.scheduleRepeat(playBeat, "16n");

const note = Tone.Time(0.2).toNotation();
//console.log(note);


function playBeat(time) {
  let beat = Tone.Transport.position.split(":")[1];
  beatatual = beat;
  //console.log(beat);
 // console.log(time);

}
Tone.Buffer.on('load', start);

function start() {
  Tone.Transport.start();
}
function setup() {
  createCanvas(400, 400);
   background(220);
}
function draw() {
  console.log(beatatual);
  for(let i = 0; i <= width; i += 50){
    line (i, 0, i, height);
     if(beatatual = 0){
       console.log("chegou");
        }

       fill(200, 0, 0, 200);
    rect(i, 0, 50, 400);
    let rndaudio = random(kitname);
  kit.get(rndaudio).start();
        } else if (beatatual = 1){
          fill(200, 0, 0, 200);
    rect(i, 0, 50, 400);
        } else if (beatatual = 2){
          fill(200, 0, 0, 200);
    rect(i, 0, 50, 400);
        } if (beatatual = 3){
          fill(200, 0, 0, 200);
    rect(i, 0, 50, 400);
        }



  console.log(beatatual);

  } }
function mouseClicked(){
  background(220);

for(let i = 0; i < width; i += 50){
  if(mouseX > i && mouseX < i+50){
    fill(200, 0, 0, 200);
    rect(i, 0, 50, 400);
    let rndaudio = random(kitname);
  kit.get(rndaudio).start();
//console.log(rndaudio);
  }
    }
      }
