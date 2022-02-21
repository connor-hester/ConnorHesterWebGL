import * as PIXI from 'pixi.js'
//import * as dat from 'dat.gui'
import { gsap } from 'gsap'
import { Application, Container, Ticker, TilingSprite } from 'pixi.js';
import { wrapYoyo } from 'gsap/all';

let tl=gsap.timeline({delay:27});
let master=gsap.timeline({defaults:{delay:-1,smoothChildTiming:true}});
let arrowContainer1:Container = new Container();
let arrowContainer2:Container=new Container();
let arrowContainer3:Container=new Container();
let arrowContainer4:Container=new Container();
let arrowContainer5:Container=new Container();
let w=window.innerWidth;
let h=window.innerHeight;


const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {
        app.loader.add('world1', 'assets/hello-world.png').load(() => {
            resolve();
        });
    });
};

const main = async () => {
    // Actual app
    let app = new PIXI.Application({antialias: true, backgroundColor: 0x30C2D5});

    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // Load assets
    await load(app);

    app.stage.addChild(arrowContainer1);
    app.stage.addChild(arrowContainer2);
    app.stage.addChild(arrowContainer3);
    app.stage.addChild(arrowContainer4);
    app.stage.addChild(arrowContainer5);

    app.stage.interactive = true

    app.stage.hitArea = new PIXI.Polygon([
        0,0,
        window.innerWidth, 0,
        window.innerWidth, window.innerHeight,
        0, window.innerHeight
    ])

    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        app.stage.hitArea = new PIXI.Polygon([
            0,0,
            window.innerWidth, 0,
            window.innerWidth, window.innerHeight,
            0, window.innerHeight
        ]);
    });

    document.body.appendChild(app.view);

    // const gui = new dat.GUI()

    // let timelineFolder= gui.addFolder("timeline");
    // timelineFolder.open();

    // let tlCallbacks:any={
    //     pause: ()=> master.pause(),
    //     play: ()=>master.play(),
    //     reverse: ()=>master.reverse(),
    //     progress: 0
    // }

    // timelineFolder.add(tlCallbacks,"pause");
    // timelineFolder.add(tlCallbacks,"play");
    // timelineFolder.add(tlCallbacks, "reverse");
    // timelineFolder.add(tlCallbacks,"progress",0.0,1,0.01).onChange((value)=>{
    // master.play();
    // master.progress(value);
    // master.pause();
    // })
    tl.add(fifth());
    master.add(first());
    master.add(second());
    master.add(third());
    master.add(fourth());
    master.play();
    tl.play();
};

function fifth(){
    let tl=gsap.timeline();
    
    for(let j=0;j<6;j++){
    for (let i=0; i<40; i++){
        let arrow = new PIXI.Graphics();
        arrow.beginFill(0x9B0F29);
        if(i%2==0){
            arrow.drawRect(50+40*i,0,30,1);
        }
        else if(i%2!=0){
            arrow.drawRect(40*i,0,30,1);
            arrow.setTransform(w,h,1,1,Math.PI,0,0,0,0);
        }
        arrow.endFill();
        arrowContainer5.addChild(arrow);
    }
}
        for (let i=0; i<240; i++){
            if(i==0){
                tl.fromTo(arrowContainer5.getChildAt(i),{height:arrowContainer5.getChildAt(i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<");
                //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
        }
            else if(i%2==0){
                tl.fromTo(arrowContainer5.getChildAt(i),{height:arrowContainer5.getChildAt(i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
                //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
            }
            else if(i%2!=0){
                tl.fromTo(arrowContainer5.getChildAt(i),{height:arrowContainer5.getChildAt(i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1,yoyo:true},"<2%");
                //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%")
            }
        }
    return tl;
}

function fourth(){
    let tl=gsap.timeline();
    for(let j=0;j<6;j++){
    for (let i=0; i<40; i++){
        let arrow = new PIXI.Graphics();
        arrow.beginFill(0xD53058);
        if(i%2==0){
            arrow.drawRect(50+40*i,0,30,1);
        }
        else if(i%2!=0){
            arrow.drawRect(40*i,0,30,1);
            arrow.setTransform(w,h,1,1,Math.PI,0,0,0,0);
        }
        arrow.endFill();
        arrowContainer4.addChild(arrow);
    }
}
        for (let i=0; i<240; i++){
            if(i==0){
                tl.fromTo(arrowContainer4.getChildAt(i),{height:arrowContainer4.getChildAt(i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<");
                //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
        }
            else if(i%2==0){
                tl.fromTo(arrowContainer4.getChildAt(i),{height:arrowContainer4.getChildAt(i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
                //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
            }
            else if(i%2!=0){
                tl.fromTo(arrowContainer4.getChildAt(i),{height:arrowContainer4.getChildAt(i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1,yoyo:true},"<2%");
                //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%")
            }
        }
    return tl;
}

function third(){
    let tl=gsap.timeline();

    for (let i=0; i<40; i++){
        let arrow = new PIXI.Graphics();
        arrow.beginFill(0xD53058);
        if(i%2==0){
            arrow.drawRect(50+40*i,0,30,1);
        }
        else if(i%2!=0){
            arrow.drawRect(40*i,0,30,1);
            //arrow.angle=180;
            arrow.setTransform(w,h,1,1,Math.PI,0,0,0,0);
        }
        arrow.endFill();
        arrowContainer3.addChild(arrow);
    }
    for(let j=0;j<4;j++){
        let pct:number=4-j;
        let percent:string=pct.toString();
        let percentString:string;
        if(j<2){
            percentString="<2%";
        }
        else{
            percentString="<"+percent+"%";
        }
        for (let i=0; i<40; i++){
            if(i==0){
                if(j==1){
                    arrowContainer3.getChildAt(i).alpha=0;
                }
                else{
                    arrowContainer3.getChildAt(i).alpha=0;
                }
                tl.fromTo(arrowContainer3.getChildAt(i),{height:arrowContainer3.getChildAt(i).scale.y},{height:h, duration:1-j/10,ease:"power3.inOut",repeat:1, yoyo:true});
            }
        else if(i%2==0 && (j==0||j==2||j==3)){
            tl.fromTo(arrowContainer3.getChildAt(i),{height:arrowContainer3.getChildAt(i).scale.y},{height:h, duration:1-j/10,ease:"power3.inOut",repeat:1, yoyo:true},percentString);
            }
        else if(i%2!=0 && (j==1||j==2||j==3)){
            tl.fromTo(arrowContainer3.getChildAt(i),{height:arrowContainer3.getChildAt(i).scale.y},{height:h, duration:1-j/10,ease:"power3.inOut",repeat:1,yoyo:true},percentString);
            }
        }
    }

    return tl;
}
function second(){
    let tl=gsap.timeline();

    for (let i=0; i<20; i++){
        let arrow = new PIXI.Graphics();
        arrow.beginFill(0xD53058);
        if(i%2==0){
            arrow.drawRect(0,40*i,1,30);
        }
        else if(i%2!=0){
            arrow.drawRect(0,50+h-40*i,1,30);
            //arrow.angle=180;
            arrow.setTransform(w,h,1,1,Math.PI,0,0,0,0);
        }
        arrow.endFill();
        arrowContainer2.addChild(arrow);
    }
    for (let j=0;j<3;j++){
        let pct:number=6-2*j;
        let percent:string=pct.toString();
        let percentString:string="<"+percent+"%";
        for (let i=0; i<20; i++){
            if(i==0){
             tl.fromTo(arrowContainer2.getChildAt(i),{width:arrowContainer2.getChildAt(i).scale.x},{width:w, duration:1-j/8,ease:"power3.inOut",repeat:1, yoyo:true});
            }
         else if(i%2==0){
             tl.fromTo(arrowContainer2.getChildAt(i),{width:arrowContainer2.getChildAt(i).scale.x},{width:w, duration:1-j/8,ease:"power3.inOut",repeat:1, yoyo:true},percentString);
            }
         else{
              tl.fromTo(arrowContainer2.getChildAt(i),{width:arrowContainer2.getChildAt(i).scale.x},{width:w, duration:1-j/8,ease:"power3.inOut",repeat:1,yoyo:true},percentString);
            }
        }
    }
    return tl;

}

function first(){
    let tl=gsap.timeline();

    for(let i=0;i<9;i++){
        let arrow = new PIXI.Graphics();
        arrow.beginFill(0xD53058);
        arrow.drawRect(0,h/2,1,30);
        arrow.endFill();
        arrowContainer1.addChild(arrow);
    }

    tl.fromTo(arrowContainer1.getChildAt(0),{width:arrowContainer1.getChildAt(0).scale.x},{width:w, duration:1, ease:"power3.out"});
    tl.to(arrowContainer1.getChildAt(0),{width:0,duration:1,ease:"power3.in"});

    arrowContainer1.getChildAt(1).setTransform(w,h,1,1,Math.PI,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(1),{width:arrowContainer1.getChildAt(1).scale.x},{width:w, duration:1, ease:"power3.out"});
    tl.to(arrowContainer1.getChildAt(1),{width:0,duration:1,ease:"power3.in"});

    arrowContainer1.getChildAt(2).setTransform(0,20,1,1,0,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(2),{width:arrowContainer1.getChildAt(2).scale.x},{width:w, duration:1, ease:"power3.out"},"<-1");
    tl.to(arrowContainer1.getChildAt(2),{width:0,duration:1,ease:"power3.in"},">"); 

    arrowContainer1.getChildAt(3).setTransform(w,h-100,1,1,Math.PI,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(3),{width:arrowContainer1.getChildAt(3).scale.x},{width:w, duration:1, ease:"power3.out"});
    tl.to(arrowContainer1.getChildAt(3),{width:0,duration:1,ease:"power3.in"}); 

    arrowContainer1.getChildAt(4).setTransform(0,-70,1,1,0,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(4),{width:arrowContainer1.getChildAt(4).scale.x},{width:w, duration:1, ease:"power3.out"},"<-1");
    tl.to(arrowContainer1.getChildAt(4),{width:0,duration:1,ease:"power3.in"},">");

    arrowContainer1.getChildAt(5).setTransform(w,h+20,1,1,Math.PI,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(5),{width:arrowContainer1.getChildAt(5).scale.x},{width:w, duration:1, ease:"power3.out"},"<-0.95");
    tl.to(arrowContainer1.getChildAt(5),{width:0,duration:1,ease:"power3.in"},">"); 

    arrowContainer1.getChildAt(6).setTransform(0,50,1,1,0,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(6),{width:arrowContainer1.getChildAt(6).scale.x},{width:w, duration:1, ease:"power3.out"},"<-0.95");
    tl.to(arrowContainer1.getChildAt(6),{width:0,duration:1,ease:"power3.in"},">");

    arrowContainer1.getChildAt(7).setTransform(w,h+140,1,1,Math.PI,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(7),{width:arrowContainer1.getChildAt(7).scale.x},{width:w, duration:1, ease:"power3.out"},"<-0.9");
    tl.to(arrowContainer1.getChildAt(7),{width:0,duration:1,ease:"power3.in"},">"); 

    arrowContainer1.getChildAt(8).setTransform(0,+170,1,1,0,0,0,0,0);
    tl.fromTo(arrowContainer1.getChildAt(8),{width:arrowContainer1.getChildAt(8).scale.x},{width:w, duration:1, ease:"power3.out"},"<-0.9");
    tl.to(arrowContainer1.getChildAt(8),{width:0,duration:1,ease:"power3.in"},">");

    return tl;
    //arrowContainer.removeChildren(0,8);
}

main();