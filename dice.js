// let x = Math.floor((Math.random() * 10) + 1);
//         document.getElementById("demo").innerHTML = x;
let d1 = Math.floor((Math.random() * 6) + 1);
    
let d2 = Math.floor((Math.random() * 6) + 1);

document.getElementById("num1").innerHTML=d1
document.getElementById("num2").innerHTML=d2
    

let img1=document.getElementById("image1")
   if(d1==1){
    img1.src="/images/dice_1.jpg"
   }
   if(d1==2){
    img1.src="/images/dice_2.jpg"
   }
   if(d1==3){
    img1.src="/images/dice_3.jpg"
   }
   if(d1==4){
    img1.src="/images/dice_4.jpg"
   }
   if(d1==5){
    img1.src="/images/dice_5.jpg"
   }
   if(d1==6){
    img1.src="/images/dice_6.jpg"
   }


   let img2=document.getElementById("image2")
   if(d2==1){
    img2.src="/images/dice_1.jpg"
   }
   if(d2==2){
    img2.src="/images/dice_2.jpg"
   }
   if(d2==3){
    img2.src="/images/dice_3.jpg"
   }
   if(d2==4){
    img2.src="/images/dice_4.jpg"
   }
   if(d2==5){
    img2.src="/images/dice_5.jpg"
   }
   if(d2==6){
    img2.src="/images/dice_6.jpg"
   }

let win1=document.getElementById("winner")
    console.log(win1);
if(d1>d2){
    
    
    win1.innerHTML="Player 1 wins"
}
else if(d1<d2){
    
    win1.innerHTML="Player 2 wins"

}
else{
    
    win1.innerHTML="Match tie"
}

