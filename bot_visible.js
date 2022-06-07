function visible(){
  if(c_waves.isPressed){
    c_audios.val = false;
    c_mixer.val = false;
    c_fx.val = false;
    c_aboutmusica.val = false;
    c_aboutmm.val = false;
    b.visible = true;
    s.visible = true;
    
    f1.visible = true;
    play1.visible = true;
    lockscore1.visible = true;
    botrand1.visible = true;
    sliderseqi1.visible = true;
    sliderseqf1.visible = true;
    f2.visible = true;
    play2.visible = true;
    lockscore2.visible = true;
    botrand2.visible = true;
    sliderseqi2.visible = true;
    sliderseqf2.visible = true;
    
    mixer1.visible = false;
    mixer2.visible = false;
    
    cntrlfiltro.visible = false;
    onfiltro.visible = false;
    cena = 0;
  }
  
  if(c_audios.isPressed){
    c_waves.val = false;
    c_mixer.val = false;
    c_fx.val = false;
    c_aboutmusica.val = false;
    c_aboutmm.val = false;
    b.visible = false;
    s.visible = false;
    
    f1.visible = false;
    play1.visible = false;
    lockscore1.visible = false;
    botrand1.visible = false;
    sliderseqi1.visible = false;
    sliderseqf1.visible = false;
    f2.visible = false;
    play2.visible = false;
    lockscore2.visible = false;
    botrand2.visible = false;
    sliderseqi2.visible = false;
    sliderseqf2.visible = false;
    
    mixer1.visible = false;
    mixer2.visible = false;
    
    cntrlfiltro.visible = false;
    onfiltro.visible = false;
    cena = 1;
  }
  if(c_mixer.isPressed){
    c_waves.val = false;
    c_audios.val = false;
    c_fx.val = false;
    c_aboutmusica.val = false;
    c_aboutmm.val = false;
    b.visible = false;
    s.visible = false;
    
    f1.visible = false;
    play1.visible = false;
    lockscore1.visible = false;
    botrand1.visible = false;
    sliderseqi1.visible = false;
    sliderseqf1.visible = false;
    f2.visible = false;
    play2.visible = false;
    lockscore2.visible = false;
    botrand2.visible = false;
    sliderseqi2.visible = false;
    sliderseqf2.visible = false;
    
    mixer1.visible = true;
    mixer2.visible = true;
    
    cntrlfiltro.visible = false;
    onfiltro.visible = false;
    cena = 2;
  }
  if(c_fx.isPressed){
    c_waves.val = false;
    c_audios.val = false;
    c_mixer.val = false;
    c_aboutmusica.val = false;
    c_aboutmm.val = false;
    b.visible = false;
    s.visible = false;
    
    f1.visible = false;
    play1.visible = false;
    lockscore1.visible = false;
    botrand1.visible = false;
    sliderseqi1.visible = false;
    sliderseqf1.visible = false;
    f2.visible = false;
    play2.visible = false;
    lockscore2.visible = false;
    botrand2.visible = false;
    sliderseqi2.visible = false;
    sliderseqf2.visible = false;
    
    mixer1.visible = false;
    mixer2.visible = false;
    
    cntrlfiltro.visible = true;
    onfiltro.visible = true;
    cena = 3;
    
  }
  if(c_aboutmusica.isPressed){
    c_waves.val = false;
    c_audios.val = false;
    c_mixer.val = false;
    c_fx.val = false;
    c_aboutmm.val = false;
    b.visible = false;
    s.visible = false;
    
    f1.visible = false;
    play1.visible = false;
    lockscore1.visible = false;
    botrand1.visible = false;
    sliderseqi1.visible = false;
    sliderseqf1.visible = false;
    f2.visible = false;
    play2.visible = false;
    lockscore2.visible = false;
    botrand2.visible = false;
    sliderseqi2.visible = false;
    sliderseqf2.visible = false;
    
    mixer1.visible = false;
    mixer2.visible = false;
    
    cntrlfiltro.visible = false;
    onfiltro.visible = false;
    cena = 4;
  }
  if(c_aboutmm.isPressed){
    c_waves.val = false;
    c_audios.val = false;
    c_mixer.val = false;
    c_fx.val = false;
    c_aboutmusica.val = false;
    b.visible = false;
    s.visible = false;
    f1.visible = false;
    
    f1.visible = false;
    play1.visible = false;
    lockscore1.visible = false;
    botrand1.visible = false;
    sliderseqi1.visible = false;
    sliderseqf1.visible = false;
    f2.visible = false;
    play2.visible = false;
    lockscore2.visible = false;
    botrand2.visible = false;
    sliderseqi2.visible = false;
    sliderseqf2.visible = false;
    
    mixer1.visible = false;
    mixer2.visible = false;
    
    cntrlfiltro.visible = false;
    onfiltro.visible = false;
    cena = 5;
  }
}