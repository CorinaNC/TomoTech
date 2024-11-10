# TomoBread
Tasks but with a yeasty twist :)
-
Have you ever found yourself procrastinating on homework or chores because there was no one there to hold you accountable?  Well, have no fear, because with TomoBread, now there is!  TomoBread is a virtual pet that is reactive to how many real-world tasks you do!  If you get your tasks done on time, you'll earn rewards for making him happy!  However, neglect your responsibilities for long enough and TomoBread may start to look sickly....

Website Link: https://to-mo.tech/

## Team Members
- Corina Conklin - https://www.corinanc.site/
- Serena Xin - https://ajisairen.github.io/
- Manan Chaturvedi - chatu035@umn.edu
- Allison Lee - https://www.allisonlee.lol/

## Inspiration
TomoBread is an accountability app that takes inspiration from virtual pets such as the Tamagotchi line of products.  We wanted to make doing tasks and homework more fun using the nostalgia of Tamagotchi alongside the addictive nature of video games.  Recently, there have been numerous apps such as Pomofarm and Pokemon Sleep that encourage the user to stick to a healthier, more productive schedule.  We liked the idea of gearing our hack towards a similar idea.  Arguably, the root of procrastination is the lack of incentive to finish a task.  With TomoBread, users will not only be rewarded for doing well, but they also may be punished for procrastination with their pet becoming upset or unhealthy.

## What it does
TomoBread has two components, those being the calendar component and TomoBread component.  The calendar component lets the user input tasks into the calendar which is then sent to our backend database which keeps track of each task.  When the user marks the task as complete, the backend will fetch the difference between the due date and the finish date.  Depending on how early the user finishes the assignment, they may earn extra points to earn coins for TomoBread accessories/cosmetics or put TomoBread into a good mood.

The app relies on a reward/punishment system so the user is incentivized to complete their work early, as they earn "in-game" currency for doing so. 

## How we built it

We first created the design and roadmap of our hack using plain old whiteboards.  Then, we decided to move to UML and Figma, first designing the user-interface and then defining what functions would be necessary for what we wanted to do.  We created a boilerplate and installed all the dependencies we needed, deciding on FastAPI as our main backend framework and a React + Pixi.js combo for the two main frontend components.  We styled the app with ChakraUI and CSS3.

Since we are mostly beginners, we tried to delegate tasks as equally as possible between members, Allison doing spritework, documentation, character design, and game design; Manan doing backend, authentication, and frontend connectivity; Corina doing frontend, some backend, and a lot of program design; and Serena doing frontend, web design, and game design.  Each of us contributed quite a bit to this project so it's difficult to put a definition on how we split it up, but ultimately we're very proud of what we accomplished in 24 hours!

## Challenges we ran into


## Accomplishments that we're proud of
We're proud of being able to make a 

## What we learned


## What's next for TomoBread
Our TomoBread as he is right now is a little lonely, so in the future, we hope to implement some TomoFriends! We'll have new accessories, new TomoBreads, new (even customizable) environments, and new expressions, as well as some improvements to the UI (there's only so much you can do in 24 hours, after all). Who knows, maybe even one day, we'll integrate some minigames and multiplayer as well!

## Built With
FastAPI, RESTful API, CRUD Operations, React, Vite, Chakra-UI, Netlify & Render (Deployment), Pixi.js, JavaScript, CSS, TypeScript, Python3, HTML, Visual Studio Code, GitHub, Figma, LucidChart (UML)
