this week I worked with more advanced strings of logic as can be seen in the if statement in line 7.

for(let i=0;i<8;i++){
  const x=window.innerWidth/8;
  const y=window.innerHeight/6;
  for(let j=0; j<6;j++){
    if(((j%2===0 && i%2===0)||((j+1)%2===0 && (i+1)%2===0))&&i!=1&&i!=6){
      const z=(Math.random()*80)+30;
      squares.beginFill(0x82100F);//square shadow
      squares.drawRect(i*x,j*y,z,z);
      squares.endFill();
      squares.beginFill(0xF54E2B);//square
      squares.drawRect(i*x+5,j*y-5,z,z);
      squares.endFill();
    }
  }
}