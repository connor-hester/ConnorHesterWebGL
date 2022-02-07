import * as PIXI from "pixi.js"
//import { Application, TextureGCSystem } from "pixi.js";

/*const load = (app: PIXI.Application) => {
  return new Promise<void>((resolve) => {
      app.loader.add('assets/hello-world.png').load(() => {
          resolve();
      });
  });
};*/

const main = async () => {
  // Actual app
  let app = new PIXI.Application();
  // Display application properly
  document.body.style.margin = '0';
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display = 'block';

  // View size = windows
  app.renderer.resize(window.innerWidth, window.innerHeight);

  // Load assets
  /*await load(app);
  let sprite = new PIXI.Sprite(
      app.loader.resources['assets/hello-world.png'].texture
  );
  sprite.x = window.innerWidth / 2 - sprite.width / 2;
  sprite.y = window.innerHeight / 2 - sprite.height / 2;
  app.stage.addChild(sprite);*/

  // Handle window resizing
  window.addEventListener('resize', (_e) => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
  });

  document.body.appendChild(app.view);
  
  const background = new PIXI.Graphics();
  const squares = new PIXI.Graphics();
  const circles = new PIXI.Graphics();
  const zigzagGraphics= new PIXI.Graphics();
  const graphicsContainer = new PIXI.Container();
  const zigzagCoords=[500,150,400,550,400,100,750,200];//y Coordinate
  const moreCoords=[450,850,1100,100,1000,500,1100,50];//x Coordinate
  const zzScale=[1,1.2,1.15,0.95,0.65,0.7,0.8,0.85];
  
  background.beginFill(0x000000); //background
  background.drawRect(0,0,3*window.innerWidth,3*window.innerHeight);
  background.endFill();

  for(let i=0; i<46; i++){//white squares
      for(let j=0; j<28; j++){
        background.beginFill(0xFFFFFF);
        background.drawRect(65*i,65*j,60,60);
        background.endFill();
    }
  }
 
  for(let i=0; i<46; i++){//black rectangles
    for(let j=0; j<28; j++){
      background.beginFill(0x000000);
      background.drawRect(60+65*i,65*j,5,50);
      background.endFill();
    }
}
background.beginFill(0x969696,0.05);//white cover layer
background.drawRect(0,0,3*window.innerWidth,3*window.innerHeight);
background.endFill();

background.angle=45;
background.x=window.innerWidth/2;
background.y=-760;
graphicsContainer.addChild(background);

for(let i=0;i<8;i++){
  const x=window.innerWidth/8;
  const y=window.innerHeight/6;
  for(let j=0; j<6;j++){
    if(((j%2===0 && i%2===0)||((j+1)%2===0 && (i+1)%2===0))){
      const z=(Math.random()*80)+30;
      const a=(Math.random()*160)-80;
      squares.beginFill(0x82100F);//square shadow
      squares.drawRect(i*x+a,j*y,z,z);
      squares.endFill();
      squares.beginFill(0xF54E2B);//square
      squares.drawRect(i*x+5+a,j*y-5,z,z);
      squares.endFill();
    }
  }
}

for(let i=0;i<=8;i++){
  const x=window.innerWidth/10;
  const y=window.innerHeight/8;
  for(let j=0; j<=12;j++){
    if((i%2==0 && j%2==0 && j!==i)){
      const z=(Math.random()*20)+20;
      const a=(Math.random()*160)+80;
      circles.lineStyle(z,0x114B66,1);
      circles.beginFill(0x000000,0);
      circles.drawCircle(i*x+50+a,j*y+50,z);
      circles.endFill();
      circles.lineStyle(z,0x59D5D8,1);
      circles.beginFill(0x000000,0);
      circles.drawCircle(i*x+55+a,j*y+45,z);
      circles.endFill();
    }
  }
}
 //circles.y=250;
 circles.x=-200;
 //circles.angle=-45;

for(let i=0;i<=12;i++){
  const x=window.innerWidth/10;
  const y=window.innerHeight/6;
  for(let j=0; j<=12;j++){
    if(j%4===0 && i%4===0){
      const z=(Math.random()*160)-80;
      const a=(Math.random()*160)-80;
      zigzagGraphics.beginFill(0x9E8800);//yellow zigzag shadow
      zigzagGraphics.drawRect(x*i-10+3*z,y*j+10+2*a,40,100);
      zigzagGraphics.drawRect(x*i-10+3*z,y*j+10+2*a,100,40);
      zigzagGraphics.drawRect(x*i+50+3*z,y*j-50+2*a,40,100);
      zigzagGraphics.drawRect(x*i+50+3*z,y*j-50+2*a,100,40);
      zigzagGraphics.drawRect(x*i+110+3*z,y*j-110+2*a,40,100);
      zigzagGraphics.endFill();

      zigzagGraphics.beginFill(0xDCD917);//yellow zigzag
      zigzagGraphics.drawRect(x*i+3*z,y*j+2*a,40,100);
      zigzagGraphics.drawRect(x*i+3*z,y*j+2*a,100,40);
      zigzagGraphics.drawRect(x*i+3*z+60,y*j+2*a-60,40,100);
      zigzagGraphics.drawRect(x*i+3*z+60,y*j+2*a-60,100,40);
      zigzagGraphics.drawRect(x*i+3*z+120,y*j+2*a-129,40,100);
      zigzagGraphics.endFill();
    }
  }
  //zigzagGraphics.angle=15;
  zigzagGraphics.scale.x=0.6;
  zigzagGraphics.scale.y=0.6;
}

zigzagGraphics.x=60;
zigzagGraphics.y=-160;
graphicsContainer.addChild(squares);
graphicsContainer.addChild(zigzagGraphics);



  graphicsContainer.addChild(circles);

  const myFilter = new PIXI.filters.BlurFilter();
  myFilter.blur=6;
  myFilter.quality=6;
  background.filters=[myFilter];

  const allFilter = new PIXI.filters.ColorMatrixFilter();
  graphicsContainer.filters=[allFilter];
  allFilter.saturate(0.5,true);
  
  const blurFilter =new PIXI.filters.BlurFilter();
  blurFilter.blur=1.5;
  graphicsContainer.filters=[blurFilter];

  //const colorFilter = new P

  app.stage.addChild(graphicsContainer);
};

// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
/*function update(this: any, delta: number) {
  if (this.sprite.x <= 0 || this.sprite.x >= window.innerWidth - this.sprite.width) {
      this.velocity.x = -this.velocity.x;
  }
  if (this.sprite.y <= 0 || this.sprite.y >= window.innerHeight - this.sprite.height) {
      this.velocity.y = -this.velocity.y;
  }
  this.sprite.x += this.velocity.x * delta;
  this.sprite.y += this.velocity.y;
};*/

main();

