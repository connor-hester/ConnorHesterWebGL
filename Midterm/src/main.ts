import * as PIXI from 'pixi.js'
import { gsap } from "gsap";
import * as filters from 'pixi-filters'
import { AdjustmentFilter } from 'pixi-filters';
import * as dat from 'dat.gui'
import { createUBOElements } from 'pixi.js';

let tl = gsap.timeline();
let temp:number;
let maxTemp:number;
let minTemp:number;
let humidity:number;
let windSpeed:number;
let windDir:number;

  

const load = (app: PIXI.Application) => {
    // return new Promise<void>((resolve) => {
    //     app.loader.add('world1', 'assets/hello-world.png').load(() => {
    //         resolve();
    //     });
    // });
    
};

const main = async () => {
  
    const data = null; 

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/weather?q=New%20york%20city&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=JSON");
    xhr.setRequestHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "8f9ac0a3ecmshb4c31864ba3f288p186f7fjsnf3588e26a837");
    
    xhr.send(data);
      
//     request.open('GET', url, true)
//     request.onload = function () {
//   // Begin accessing JSON data here
//      data = JSON.parse()
//      temp=data.main.temp;
//      console.log(temp);
//     }

//     request.send()
    // Actual app
    let app = new PIXI.Application({antialias: true, backgroundColor: 0x113311});

    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // Load assets
    await load(app);

    // let sprite = new PIXI.Sprite(app.loader.resources[`world1`].texture);
    // sprite.scale.set(0.5, 0.5)
    // sprite.anchor.set(0.5, 0.5)
    // sprite.interactive = true;

    // sprite.x = window.innerWidth/2
    // sprite.y = 0// window.innerHeight/2

    
    app.stage.interactive = true
    app.stage.hitArea = new PIXI.Polygon([
        0,0,
        window.innerWidth, 0,
        window.innerWidth, window.innerHeight,
        0, window.innerHeight
    ])

    // app.stage.on('pointerdown', event => {
    //     mModel.mousePos.set(event.data.global.x, event.data.global.y)
	// 	// console.log(colors)
    // })

    // const gui = new dat.GUI()
    
    // let buttonFolder = gui.addFolder("button params")
    // buttonFolder.add(model.getInstance().buttonData, 'width', 0, 200)
    // buttonFolder.add(model.getInstance().buttonData, 'height', 0, 200)
    // buttonFolder.addColor(model.getInstance().buttonData, 'firstColor')
    // buttonFolder.addColor(model.getInstance().buttonData, 'secondColor')

	// let timelineFolder = gui.addFolder("timeline")
	// timelineFolder.open()

	// let tlCallbacks = {
	// 	pause: () => tl.pause(),
	// 	play: () => tl.play(),
	// 	reverse: () => tl.reverse(),
	// 	progress: 0
	// }

	// timelineFolder.add(tlCallbacks, "pause")
	// timelineFolder.add(tlCallbacks, "play")
	// timelineFolder.add(tlCallbacks, "reverse")
	// timelineFolder.add(tlCallbacks, "progress", 0.0, 1.0, 0.01).onChange((value) => {
	// 	tl.play()
	// 	tl.progress(value)
	// 	tl.pause()
	// })

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

    
    //app.ticker.add(update);
};

// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
// function update(delta: number) {

//     mModel.elapsedTime += delta;

// 	graphs.forEach((graph, i) => {
// 		graph.clear()
// 		if(graph.filters != null && 
//             graph.filters[0] instanceof AdjustmentFilter) {
// 			graph.filters[0].red = colors[i].r;
// 			graph.filters[0].green = colors[i].g;
// 			graph.filters[0].blue = colors[i].b;
// 		}
// 		graph.beginFill(0xffffff)
// 		graph.drawCircle(0,0,sizes[i].value)
// 	})

//     switch (mModel.sceneState) {
//         case SceneState.first:
//             sceneOne.container.visible = true;
//             sceneTwo.container.visible = false;
//             sceneOne.update();
//             break;
        
//         case SceneState.second:
//             sceneOne.container.visible = false;
//             sceneTwo.container.visible = true;
//             sceneTwo.update();
//             break;
    
//         default:
//             break;
//     }
// };

main();