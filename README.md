# Random Background Color Changer

This is a simple and fun web application built with **HTML**, **CSS**, and **JavaScript**. Clicking the **"Click Me!"** button changes the background color of the webpage to a random color from a predefined list.

## Features

- Changes background color with each button click
- Uses a list of predefined colors: `red`, `blue`, `green`, `black`, `yellow`, `purple`
- Smooth and centered button styling
- Beginner-friendly code structure

## Demo

To see it live:
- Open `index.html` in any modern web browser

## Project Structure


## How It Works

1. The page loads with a white background.
2. When the user clicks the **"Click Me!"** button:
   - A random color is picked from a predefined array.
   - The background color of the page is updated with that color.

## Code Snippets

### JavaScript (app.js)

```js
const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'blue', 'green', 'black', 'yellow', 'purple'];

body.style.backgroundColor = 'white';

button.addEventListener('click', function func() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
});
button {
    background-color: #555555;
    color: #fff;
    padding: 15px 32px;
    font-size: 16px;
    cursor: pointer;
    margin: 40vh 90vh;
    border-radius: 10%;
}
