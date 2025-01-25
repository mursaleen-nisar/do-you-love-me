# Do You Love Me?

A fun and interactive web application that asks the user if they love the creator. Depending on the user's response, the application reacts accordingly.

## Features

- Mobile-friendly design
- Interactive buttons with animations
- Video background
- Custom fonts and styles

## Demo

Check out the hosted version of this project [here](https://mursaleen-nisar.github.io/do-you-love-me).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mursaleen-nisar/do-you-love-me.git
    ```
2. Navigate to the project directory:
    ```bash
    cd do-you-love-me
    ```
3. Open `index.html` in your browser to view the application.

## Usage

- Open the application in a web browser.
- Click the "Yes" or "No" button to interact with the application.

## Code Overview

### HTML

The main structure of the application is defined in `index.html`. It includes the video background, title, subtitle, and buttons.

### CSS

Custom styles are defined within a `<style>` tag in `index.html`. Tailwind CSS is also used for additional styling.

### JavaScript

The main functionality is implemented in `script.js`. It includes:

- A function to detect mobile devices.
- Event listeners for button interactions.
- Logic to change the position of the "No" button on mobile devices.
- Logic to update the content and video source when the "Yes" button is clicked.
