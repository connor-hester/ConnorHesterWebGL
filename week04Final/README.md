# Wave Documentation

This week I had mixed levels of success with the waves homework. While I feel I understand animation techniques and GSAP, I still struggle to understand proper implementation of the MVC design. I was able to improve my understanding slightly this week and have attempted to use it for my homework but in the end I was running short on time so I chose to go with the long/disorganized way.

## Evolving functions
I think the biggest thing that I am proud of accomplishing this week was getting my timeline code to run from functions of increased cleanliness/simplicity. If you look at my function called "first", the values are all hard coded, it is dense and inefficient. But by my "fourth" and "fifth" functions, I was able to refine and to create much clearer structuring. I think the next step from here is figuring out how to break up my work into the MVC structure. 


## Code Snippet
- The code below is the basic controlling code for the last scene of my waves drawing. I was having difficulty figuring out how to get the animations to occur in a quick/layered succession and then I realized that I could be playing two timeline animations at once, so as you can see below, I have the master animation and the tl animation (on a 27 second delay) so that tl and master will run the fourth and fifth function at the same time which creates a layered effect to the sinusoidal wave motion. 

let tl=gsap.timeline({delay:27});
let master=gsap.timeline({defaults:{delay:-1,smoothChildTiming:true}});
tl.add(fifth());
    master.add(first());
    master.add(second());
    master.add(third());
    master.add(fourth());
    master.play();
    tl.play();

