import * as PIXI from 'pixi.js'
import { Ticker } from 'pixi.js';
//import * as dat from 'dat.gui'
/*import { Model, SceneState } from './model'
import { Scene } from './scene'
import { SceneOne } from './sceneOne';
import { SceneTwo } from './sceneTwo';

let mModel = new Model();
let sceneOne: SceneOne = new SceneOne(mModel);
let sceneTwo: SceneTwo = new SceneTwo(mModel);*/


const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {
        app.loader.add('assets/hello-world.png').load(() => {
            resolve();
        });
    });
};

const main = async () => {
    // Actual app
    let app = new PIXI.Application({antialias: true, backgroundColor: 0x111111});

    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // Load assets
    await load(app);

    let graphics = new PIXI.Container();
    let circles = new PIXI.Graphics();
    let otherShapes = new PIXI.Graphics();
    //let text = new PIXI.Sprite();
    let hours: number;
    let minutes: number;
    let morning = true;
    let tens: number;
    let ones: number;
    
    hours=updateTime()[0];
    minutes=updateTime()[1];

if(hours>12){
    morning=false;
    hours=hours-12;
}
else{
    morning=true;
    hours=hours;
}

circles.beginFill(0xFFFFFF,0.75);
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
for (let i=0;i<hours;i++){
    if(i<4){
        circles.drawCircle(window.innerWidth/4-100,3*window.innerHeight/4-100*i-10,50);
    }
    if(i>=4 && i<8){
        circles.drawCircle(window.innerWidth/4,3*window.innerHeight/4-100*(i-4)-10,50)
    }
    if(i>=8){
        circles.drawCircle(window.innerWidth/4+100,3*window.innerHeight/4-100*(i-8)-10,50)
    }
}
    otherShapes.beginFill(0xFFFFFF);
    otherShapes.drawRect(window.innerWidth/16-50,window.innerHeight/8-50,7*window.innerWidth/8+100,3*window.innerHeight/4+100);
    otherShapes.endFill();
    if((hours>11 && morning===false) || (hours<=4 && morning===true)){ //11pm-4am
        otherShapes.beginFill(0x102223);
    }
    else if(((hours>4 && hours<=6 && morning===true))||((morning===false && hours>8 && hours<=11))){//4-6am and 8-11pm
        otherShapes.beginFill(0x1E3F40);
    }
    else if(hours>6 && hours<=8 && morning===true){//6-8am
        otherShapes.beginFill(0x356D6F);
    }
    else if((hours>8 && hours<=10 && morning===true)||(hours>2 && hours<=4 && morning===false)){//8-10am and 2-4 pm
        otherShapes.beginFill(0x5DC1C5);
    }
    else if((hours>10&&morning===true)||(hours<=2 && morning===false)){//10am-2pm
        otherShapes.beginFill(0x77F7FC);
    }
    else if(hours>6&&hours<=8 && morning===false){ //6-8 PM
        otherShapes.beginFill(0x2B5759);
    }

    otherShapes.drawRect(window.innerWidth/16,window.innerHeight/8,7*window.innerWidth/8,3*window.innerHeight/4);
    otherShapes.endFill();
    otherShapes.beginFill(0xFFFFFF);
    otherShapes.drawRect(window.innerWidth/2-50,3*window.innerHeight/8,20,20);
    otherShapes.drawRect(window.innerWidth/2-50,5*window.innerHeight/8,20,20);
    otherShapes.endFill();

    
    
    graphics.addChild(otherShapes);
    graphics.addChild(circles);
    app.stage.addChild(graphics);
    // app.stage.addChild(sprite);
    // let cont = new PIXI.Container();
    //app.stage.addChild(sceneOne.container);
    //app.stage.addChild(sceneTwo.container);

    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        // sprite.x = window.innerWidth / 2 - sprite.width / 2;
        // sprite.y = window.innerHeight / 2 - sprite.height / 2;
    });

    document.body.appendChild(app.view);


    /*const gui = new dat.GUI()
    gui.add(mModel.getInstance().buttonData, 'width', 0, 200)
    gui.add(mModel.getInstance().buttonData, 'height', 0, 200)
    gui.addColor(mModel.getInstance().buttonData, 'firstColor')
    gui.addColor(mModel.getInstance().buttonData, 'secondColor')
*/
    app.ticker.speed=2;
    app.ticker.add(updateTime);
};

// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
function updateTime(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    return([hrs,mins]);
}
/*function update(delta: number) {

    switch (mModel.sceneState) {
        case SceneState.first:
            sceneOne.container.visible = true;
            sceneTwo.container.visible = false;
            sceneOne.update();
            break;
        
        case SceneState.second:
            sceneOne.container.visible = false;
            sceneTwo.container.visible = true;
            sceneTwo.update();
            break;
    
        default:
            break;
    }
};*/

main();

