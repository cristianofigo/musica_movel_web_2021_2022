function scoretimeline(){
///*  criar alias das variaveis
/*
if (clock_global > "0:0:0" && clock_global < "1:0:0") {
   console.log("compasso 1");
 }
*/

  if(lockscore1.val == true){
  if(sectimeline > "0:0:0" && sectimeline < "1:0:0"){
   numsteps1 = 16;
    sliderseqi1.val = 3;
    sliderseqf1.val = 4;
    }
    if(sectimeline > "1:0:0" && sectimeline < "2:0:0"){
    numsteps1 = 4;
    sliderseqi1.val = 0;
    sliderseqf1.val = 2;
   }
    if(sectimeline > "2:0:0" && sectimeline < "2:2:0"){
    numsteps1 = 32;
    sliderseqi1.val = 10;
    sliderseqf1.val = 12;
   }
    if(sectimeline > "2:2:0" && sectimeline < "2:4:0"){
    numsteps1 = 64;
    sliderseqi1.val = 10;
    sliderseqf1.val = 12;
   }
   if(sectimeline > "2:4:0" && sectimeline < "3:0:0"){  
    numsteps1 = 16;
     sliderseqi1.val = 3;
     sliderseqf1.val = 4;
     }
    f1.val = numsteps1;
  }
 }
