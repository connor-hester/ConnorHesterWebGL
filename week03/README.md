below was the code that i used to determine how to format the circles that were representative of minutes
if(minutes>=10){
    tens=Math.floor(minutes/10);
    ones=minutes%10;
    for(let i=0; i<ones; i++){
        if(i<5){
            circles.drawCircle(3*window.innerWidth/4+40,3*window.innerHeight/4-60*i,30);
        }
        if(i>=5 && i<9){
            circles.drawCircle(3*window.innerWidth/4+100,3*window.innerHeight/4-60*(i-5),30)
        }
    }
    for(let i=0; i<tens; i++){
        if(i<5){
            circles.drawCircle(3*window.innerWidth/4-210,3*window.innerHeight/4-70*i-5,35);
        }
        if(i>=5 && i<9){
            circles.drawCircle(3*window.innerWidth/4-150,3*window.innerHeight/4-70*(i-5)-5,35)
        }
    }
}
else{
    for (let i=0;i<minutes;i++){
        if(i<5){
            circles.drawCircle(3*window.innerWidth/4+90,3*window.innerHeight/4-60*i,30);
        }
        if(i>=5 && i<9){
            circles.drawCircle(3*window.innerWidth/4+150,3*window.innerHeight/4-60*(i-5),30)
        }
    }
}
