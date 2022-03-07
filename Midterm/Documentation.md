# Midterm Documentation

## Video of Project
https://youtu.be/d95zSeGcL_I

## Brainstorming/Ideating
- As can be seen in the following two images, I began my brainstorm process on paper just to get a rough image down. I knew that I wanted to work with GSAP and the open weather API to create something akin to the 24 hour clock meets the wave animation. 
- Using the weather API Documentation, I determined I wanted to create animations that represented current temp, max temp, min temp, humidity level, wind speed, and wind direction

![Image1](documentationimages/doc1.png?raw=true "Doc1")
![Image2](documentationimages/doc2.png?raw=true "Doc2")

## Design Process
- I went about creating the framing that my different animations would exist in first because that would inform the sizing and positioning for the rest of my composition, as can be seen in the code below.
![Image3](documentationimages/doc3.png?raw=true "Doc3")
- Next I began figuring out what types of motion made the most sense for each animation. I tried to incorporate a variety of easing, duration, and sequencing styles from the GSAP library to make the composition more visually interesting and intuitive. I broke down each animation into its own function, this made it easier for me to organize my thoughts and made it easier to assemble the master timeline at the end. Below you can see an example of one of the functions that I used, this one is for current temperature. 
![Image4](documentationimages/doc4.png?raw=true "Doc4")
- I wanted to make sure my animations were functioning properly before I tried to pull in the API weather data because I knew that I was going to struggle the most with this step (see Difficulties and Setbacks). I eventually got the API to function properly and pull data when I asked it to. 
- I began the process of my next step which was to create buttons for the user to switch between weather information for different cities but this wasn't completed in time.

## Difficulties and Setbacks
- The biggest struggle I had was getting my code to pull the API data and read it properly. There were multiple different stuck points that I ran into with this step of the process. 
    - The first stuckpoint that I hit was trying to understand the CORS policy no "access-control-allow-origin" error. I had never received an error like this before. But after contacting my professor, I realized that I had to refigure a substantial portion of my jQuery code in order to fix.
    - The second stuckpoint that I hit was towards the end of my process. I was successfully making an API call but because of the formatting of the call, the JSON object that was returned was unreadable by my code because the JSON object had a "test{}" that wrapped it which made my the code in the JSON objcect unreadable. Fortunately, once I noticed this mistake, it was easy enough to fix and the resulting code snippet can be seen below. 
    ![Image5](documentationimages/doc5.png?raw=true "Doc5")
- The other issue I had was involving the UI elements. My original plan was to have several buttons that the user could interact with in order to change the city that the weather API was retrieving data from. However, I left this as the last step for implmentation and never got to finish it. 

## What I'm Proud Of
- I am most proud that I was able to write code that could make an API call and process the JSON object accordingly. Before this project I only had a limited understanding of how to make an API call and also had no idea how an async function actually worked. But after spending 3+ hours puzzling it out, I feel proud of the result I ended with. Below is the snippet of code that features the API call
![Image6](documentationimages/doc6.png?raw=true "Doc6")
- I also am proud that I have a finished product that I wasn't rushing to complete, I was able to take my time throughout the process which allowed me to make much more conscious design decisions. I like that I fit a lot of information into a relatively clean design with a complementary color palette. The end result looks polished and deliberately designed.

## Further Implementation
- I would absolutely like to build this project out further if I had a little more time. As previously mentioned the biggest thing that I would do to expand on my work is to add more UI elements, namely, buttons. I think that the addition of buttons would allow for the generative aspect of this project to be emphasized more. Right now you can only view one animation loop before you have to refresh the page, if there were multiple buttons corresponding to multiple different cities for which the weather station animation could be generated. 

## General Reflection
- In reflecting at where I am at this point in the class, I don't know how I feel. I think that I have definitely made progress towards my understanding of PIXI, GSAP, and Gui interfaces since the beginning of the semester. But it feels that I'm missing a requisite knowledge of coding structures, terms, and syntaxes that everyone else in this class has. I know that a large part of that gap in knowledge is on me to pick up the slack on but I don't know where to start. Like I would ask questions more often or go in to office hours but I don't even know what I don't know, like I can't accurately articulate what pieces of the puzzle I'm missing. That is except for MVC, I have tried every week to piece together the MVC structure but I am still at a loss for how to utilize it. I appreciate the purpose of MVC and how it efficiently and cleanly structures code but I haven't reached the point where I can implement it in my code or understand how to format my thinking and designing process so that it aligns with MVC. Like it is obvious from looking at my code that I need to learn how to adopt MVC because it will make my code far more readable and organizable, currently I code everything out the long way which still gets me to the same end result but it takes longer and looks messier. I don't know if this will be read by anyone but I feel I needed to write this little rant down somewhere to get it out of my head. 