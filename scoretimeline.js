function scoretimeline(){
///*  criar alias das variaveis
  if(lockscore1.val == true){
  if(sectimeline < 3.8){  
   numsteps1 = 42;
    sliderseqi1.val = 3;
    sliderseqf1.val = 4;
    }
    if(sectimeline > 3.8){  
    numsteps1 = 12;
    sliderseqi1.val = 9;
    sliderseqf1.val = 11;
   }
    if(sectimeline > 6.3){  
    numsteps1 = 32;
    sliderseqi1.val = 10;
    sliderseqf1.val = 12;
   }
    if(sectimeline > 10){  
    numsteps1 = 64;
    sliderseqi1.val = 10;
    sliderseqf1.val = 12;
   }
    f1.val = numsteps1;
  } 
 }