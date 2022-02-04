# Frontend Mentor - Time tracking dashboard

![Design preview for the Time tracking dashboard coding challenge](/Screenshot 2022-02-04 at 09-51-10 Frontend Mentor Time tracking dashboard.png)


This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](/Screenshot 2022-02-04 at 09-51-10 Frontend Mentor Time tracking dashboard.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/gerbelli27/timetracking)
- Live Site URL: [Add live site URL here](https://gerbelli27.github.io/timetracking/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Html | Css | JavaScript]


### What I learned

With this project i was able to have a first contact with .json files and get data from a external source, improve my skills with css flexbox and flexgrid, transitions between mobile to desktop and little bit of javascript.



```html
<div class="card work">
      <div class="card__data">
        <h3 class="title-card" id="title-card">Work<i></i></h3>
        <h2 class="title-data" id="work"></h2>
      </div>
```
```css
.cards{
        display: grid;
        grid-template-columns: 16rem 16rem 16rem 16rem;
        grid-template-rows: 15.175rem 15.175rem;

        height: auto;
        width: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }
```

## Author

- Website - [Eduardo Gerbelli](https://www.linkedin.com/in/eduardogerbelli/)
- Frontend Mentor - [Eduardo Gerbelli](https://www.frontendmentor.io/profile/gerbelli27)
- Github - [Eduardo Gerbelli](https://github.com/gerbelli27)