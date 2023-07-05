//COUNTDOWN
function countdown() {
    const newYear = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = newYear - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
  countdown();
  setInterval(countdown, 1000);



//SNOWBALL
// Get the canvas element
        // const canvas = document.getElementById("snowfallCanvas");
        // const ctx = canvas.getContext("2d");

        // // Set the canvas dimensions to match the window size
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;

        // // Define the snowflake class
        // class Snowflake {
        //     constructor() {
        //         this.x = Math.random() * canvas.width; // X coordinate
        //         this.y = Math.random() * canvas.height; // Y coordinate
        //         this.radius = Math.random() * 3 + 1; // Snowflake radius
        //         this.speed = Math.random() * 3 + 1; // Falling speed
        //         this.opacity = Math.random(); // Transparency
        //     }

        //     // Update the snowflake's position
        //     update() {
        //         this.y += this.speed;
        //         if (this.y > canvas.height) {
        //             this.y = -this.radius;
        //         }
        //     }

        //     // Draw the snowflake
        //     draw() {
        //         ctx.beginPath();
        //         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        //         ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        //         ctx.fill();
        //         ctx.closePath();
        //     }
        // }

        // // Create an array to hold the snowflakes
        // const snowflakes = [];
        // const numberOfSnowflakes = 100;

        // // Generate the initial set of snowflakes
        // for (let i = 0; i < numberOfSnowflakes; i++) {
        //     snowflakes.push(new Snowflake());
        // }
        // // Function to update and draw the snowflakes
        // function animateSnowfall() {
        //     // Clear the canvas
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);

        //     // Update and draw each snowflake
        //     for (let i = 0; i < snowflakes.length; i++) {
        //         const snowflake = snowflakes[i];
        //         snowflake.update();
        //         snowflake.draw();
        //     }

        //     // Call the function again to create a smooth animation loop
        //     requestAnimationFrame(animateSnowfall);
        // }

        // // Start the animation
        // animateSnowfall();