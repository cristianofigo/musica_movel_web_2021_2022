function menu(){
  c_waves = createToggle("ondas", 0, 0, w/6, h/6);
  //c_waves.setStyle(estilo_slider1);
  c_waves.val = true;
  c_audios = createToggle ("audios", w/6, 0, w/6, h/6);
  c_mixer = createToggle ("mixer", (w/6)+w/6, 0, w/6, h/6);
  c_fx = createToggle ("fx", (w/6)+((w/6)*2), 0, w/6, h/6);
  c_aboutmusica = createToggle ("Sobre", (w/6)+((w/6)*3), 0, w/6, h/6);
  c_aboutmm = createToggle ("MM", (w/6)+((w/6)*4), 0, w/6, h/6);
  }

function botoes_ondas(){
 //global
  b = createCheckbox("Play", 0, h/6, w/6, h/12);
  b.setStyle({
    strokeWeight: (1),
    fillBg: color("#CC3131DD"),
    rounding: 1, 
    
});
  s = createSlider("modBPM", (w/6)*2, h/6, 200, 32, 0, 3);
  s.setStyle({
    strokeWeight: (0),
    fillBg: color("#FF000000"),
    rounding: 1,
    trackWidth: 0.1
});
  
  
  //canal1
  play1 = createCheckbox("Play1", 0, (h/6)*2, w/24, h/24);
  play1.val = true;
  play1.setStyle({
    strokeWeight: (1),
    fillBg: color("#FF0000B7"),
    rounding: 1,
    });
  lockscore1 = createCheckbox("score", (w/6)/4, (h/6)*2, w/24, h/24 );
  lockscore1.val = true;
  lockscore1.setStyle ({
    strokeWeight: (1),
    fillBg: color("#7E7E1B"),
    rounding: 1,
    });
  botrand1 = createCheckbox("rand", 0, ((h/6)*2)+h/24, w/24, h/24);
  botrand1.setStyle ({
    strokeWeight: (1),
    fillBg: color("#1B5F7E"),
    rounding: 1,
    });
  sliderseqi1 = createSlider("seqi", w/6, (h/6)*2, w/1.25, h/96, 0, numsteps1);
  sliderseqi1.isInteger = true;
  sliderseqi1.val = seqinicio1;
  sliderseqi1.setStyle({
    strokeWeight: (0.5),
    fillBg: color("#72707000"),
    rounding: 1,
    trackWidth: 0.1
});
  sliderseqf1 = createSlider("seqf", w/6, (h/6)*2.75, w/1.25, h/96, 0, numsteps1);
  sliderseqf1.isInteger = true;
  sliderseqf1.val = seqfim1;
  sliderseqf1.setStyle({
    strokeWeight: (0.5),
    fillBg: color("#72707000"),
    rounding: 1,
    trackWidth: 0.1
});
  f1 = createSlider("Fatias", 0, (h/6)*2.75, (w/6)/1.25, h/96, 1, maxsteps); //maximo de 32 fatias
  f1.isInteger = true;
  f1.setStyle({
    strokeWeight: (0),
    fillBg: color("#FF000000"),
    rounding: 1,
    trackWidth: 0.1
});
  //canal2
  play2 = createCheckbox("play2", 0, (h/6)*3, w/24, h/24);
  play2.val = true;
  play2.setStyle({
    strokeWeight: (1),
    fillBg: color("#FF0000B7"),
    rounding: 1,
    });
  lockscore2 = createCheckbox("score2", (w/6)/4, (h/6)*3, w/24, h/24 );
  lockscore2.val = true;
  lockscore2.setStyle ({
    strokeWeight: (1),
    fillBg: color("#7E7E1B"),
    rounding: 1,
    });
  botrand2 = createCheckbox("rand2", 0, ((h/6)*3)+h/24, w/24, h/24);
  botrand2.setStyle ({
    strokeWeight: (1),
    fillBg: color("#1B5F7E"),
    rounding: 1,
    });
  sliderseqi2 = createSlider("seqi2", w/6, (h/6)*3, w/1.25, h/96, 0, numsteps2);
  sliderseqi2.isInteger = true;
  sliderseqi2.val = seqinicio2;
  sliderseqi2.setStyle({
    strokeWeight: (0.5),
    fillBg: color("#72707000"),
    rounding: 1,
    trackWidth: 0.1
});
  sliderseqf2 = createSlider("seqf2", w/6, (h/6)*3.75, w/1.25, h/96, 0, numsteps2);
  sliderseqf2.isInteger = true;
  sliderseqf2.val = seqfim2;
  sliderseqf2.setStyle({
    strokeWeight: (0.5),
    fillBg: color("#72707000"),
    rounding: 1,
    trackWidth: 0.1
});
  f2 = createSlider("Fatias2", 0, (h/6)*3.75, (w/6)/1.25, h/96, 1, maxsteps); //maximo de 64 fatias
  f2.isInteger = true;
  f2.setStyle({
    strokeWeight: (0),
    fillBg: color("#FF000000"),
    rounding: 1,
    trackWidth: 0.1
});
 //próximos canais é só substituir o (h/6)*3 por *4 e *5 sucesstivamente
  //antes disso colocar os presets de estilo
}

function botoes_audios(){
 
}

function botoes_mixer(){
  mixer1 = createSliderV("mixer1", w/6, h/4, w/24, h/3, -60, 12 );
  mixer1.visible = false;
  mixer2 = createSliderV("mixer2", (w/6)*2, h/4, w/24, h/3, -60, 12 );
  mixer2.visible = false;
}

function botoes_fx(){
  cntrlfiltro = createSlider2d("filtro", 230, 300, 150, 80, 0, 2, 5, 1000);
  cntrlfiltro.visible = false;
  onfiltro = createCheckbox("onfiltro", 200, 300, 30, 50);
  onfiltro.val = true;
  onfiltro.visible = false;
}


function mousePressed(){
  visible();
  atualizatempos();
    
  if (b.val) { //transport global
    indexseq = 0;
    BPM = 60 / temposlice1; //atualiza quando muda sample e numsteps
    Tone.Transport.bpm.value = BPM * modBPM;
    Tone.Transport.start();
  }
  if (b.val == false) {
    Tone.Transport.stop();
    audio1.stop();
    audio2.stop();
  }
  if (play1.val && Tone.Transport.state == "started") { //canal1
    indexseq1 = -1;
    loop1.start(0);
  }
  if (play1.val == false) {
    loop1.stop();
    audio1.stop();
  }
  
  if (play2.val && Tone.Transport.state == "started") { //canal2
    indexseq2 = -1;
    loop2.start(0);
  }
  if (play2.val == false) {
    loop2.stop();
    audio2.stop();
  }
 //bypass fx  - global??
  if (onfiltro.val == true) {
     }
  if (onfiltro.val == false) {
      }
    }

function mouseDragged() {
  if (s.isChanged) { //controle de BPM
    modBPM = s.val;
    audio1.playbackRate = modBPM;
    audio2.playbackRate = modBPM;//posso alterar o pitch individualmente
    Tone.Transport.bpm.value = BPM * modBPM;
  }
  //canal1
  if (f1.isChanged) { //controle de fatias
    loop1.stop();
    let seqi_temp1 = seqinicio1;
    let seqf_temp1 = seqfim1;
    let numsteps_temp = numsteps1;
    f1.min = 4;
    numsteps1 = int(f1.val);
    sliderseqi1.max = int(f1.val);
    sliderseqf1.max = int(f1.val);
    sliderseqi1.val = seqinicio1;
    sliderseqf1.val = seqfim1;
    BPM = 60 / temposlice1;
    indexseq1 = 0;
    temposlice1 = tempoaudio1 / numsteps1;
    atualizatempos();
    loop1.start();
  }  
  if (sliderseqi1.isChanged) {
    seqinicio1 = sliderseqi1.val;
    seqfim1 = sliderseqf1.val;
    atualizatempos();
    indexseq1 = 0;    
  }
  if (sliderseqf1.isChanged) {
    seqinicio1 = sliderseqi1.val;
    seqfim1 = sliderseqf1.val;
    atualizatempos();
    indexseq1 = 0;
  }
  if (f2.isChanged) { //controle de fatias
    loop2.stop();
    let seqi_temp2 = seqinicio2;
    let seqf_temp2 = seqfim2;
    let numsteps_temp = numsteps2;
    f2.min = 4;
    numsteps2 = int(f2.val);
    sliderseqi2.max = int(f2.val);
    sliderseqf2.max = int(f2.val);
    sliderseqi2.val = seqinicio2;
    sliderseqf2.val = seqfim2;
    BPM = 60 / temposlice2;
    indexseq2 = 0;
    temposlice2 = tempoaudio2 / numsteps2;
    atualizatempos();
    loop2.start();
  }  
  if (sliderseqi2.isChanged) {
    seqinicio2 = sliderseqi2.val;
    seqfim2 = sliderseqf2.val;
    atualizatempos();
    indexseq2 = 0;    
  }
  
  if (mixer1.isChanged){
    audio1.volume.value = mixer1.val;
    print(mixer1.val);
  }
  
  if (mixer2.isChanged){
    audio2.volume.value = mixer2.val;
  }
  
  
  if (cntrlfiltro.isChanged) {
        filtro.frequency.value = cntrlfiltro.val.y;
  filtro.Q.value = cntrlfiltro.val.x;
    
  }
}

