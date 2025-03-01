document.addEventListener("DOMContentLoaded", function () {
    // Base colors as an array of objects with name and RGB values
    const baseColors = [
        { name: "green", rgb: "rgb(0, 255, 0)" },
        { name: "blue", rgb: "rgb(0, 0, 255)" },
        { name: "purple", rgb: "rgb(128, 0, 128)" },
        { name: "pink", rgb: "rgb(255, 192, 203)" },
        { name: "red", rgb: "rgb(255, 0, 0)" },
        { name: "orange", rgb: "rgb(255, 165, 0)" },
        { name: "yellow", rgb: "rgb(255, 255, 0)" }
    ];

    // Function to select a random base color from the baseColors array
    function getRandomBaseColor() {
        const randomIndex = Math.floor(Math.random() * baseColors.length);
        return baseColors[randomIndex]; // Return the random base color object
    }

    // Detailed descriptions for each color
    const colorDescriptions = {
        green: `
            <h2>Green Thoughts: Nature, Growth, and Harmony</h2>
            <p>Green is a color that is immediately associated with nature and its calming effect...</p>
        `,
        blue: `
            <h2>Blue Calm: Trust, Stability, and Clarity</h2>
            <p>Blue is the color of calm and vastness...</p>
        `,
        purple: `
            <h2>Purple Mysticism: Luxury, Creativity, and Ambition</h2>
            <p>Purple, a mix of blue and red, is a color deeply associated with luxury and elegance...</p>
        `,
        pink: `
            <h2>Pink Warmth: Compassion, Playfulness, and Tenderness</h2>
            <p>Pink is a color immediately associated with warmth and kindness...</p>
        `,
        red: `
            <h2>Red Passion: Energy, Love, and Intensity</h2>
            <p>Red is a powerful, energetic color that can symbolize both passion and danger...</p>
        `,
        orange: `
            <h2>Orange – Energy and Enthusiasm</h2>
            <p>Orange is a cheerful and energetic color often associated with creativity...</p>
        `,
        yellow: `
            <h2>Yellow Joy: Clarity, Optimism, and Happiness</h2>
            <p>Yellow is the color of light and sunshine...</p>
        `
    };

    // Select a random base color
    const randomBaseColor = getRandomBaseColor();

    // Create a container element for the color description
    const descriptionContainer = document.createElement("div");
    descriptionContainer.id = "color-description";

    // Retrieve the description for the selected color
    const descriptionText = colorDescriptions[randomBaseColor.name] || "No description available.";

    // Insert the description into the container as HTML content
    descriptionContainer.innerHTML = descriptionText;

    // Insert the description container at the beginning of the body element
    document.body.insertBefore(descriptionContainer, document.body.lastChild);

    // The MovingObject class that controls the animated objects
    class MovingObject {
        constructor(element, centerX, centerY, maxDistance, baseColor) {
            this.element = element;
            this.centerX = centerX;
            this.centerY = centerY;
            this.maxDistance = maxDistance;
            this.maxStep = 1;
            this.directionX = (Math.random() - 0.5) * 2;  // Random direction (left/right)
            this.directionY = (Math.random() - 0.5) * 2;  // Random direction (up/down)
            this.posX = centerX;
            this.posY = centerY;

            // Set initial styles for the element
            this.element.style.position = "absolute";
            this.element.style.left = `${centerX}px`;
            this.element.style.top = `${centerY}px`;
            this.element.style.backgroundColor = this.getColorVariations(baseColor.rgb);  // Apply random color variations
        }

        // Creates different color variations by adjusting RGB values slightly
        getColorVariations(baseColor) {
            const baseRGB = baseColor.match(/\d+/g).map(Number);  // Extract RGB values from the color string
            const variations = [];

            // Generate 10 variations of the base color
            for (let i = 0; i < 10; i++) {
                const variation = baseRGB.map(c => {
                    const offset = Math.floor(Math.random() * 200) - 20;  // Random offset for variation
                    const newColor = Math.min(255, Math.max(0, c + offset));  // Ensure color stays within RGB bounds
                    return newColor;
                });
                variations.push(`rgb(${variation[0]}, ${variation[1]}, ${variation[2]})`);
            }

            // Randomly pick one of the variations to apply
            const randomVariationIndex = Math.floor(Math.random() * variations.length);
            return variations[randomVariationIndex];
        }

        // Moves the object based on the direction and distance limits
        move() {
            this.posX += this.directionX * this.maxStep;  // Update horizontal position
            this.posY += this.directionY * this.maxStep;  // Update vertical position
            
            // Calculate the distance from the center point
            const deltaX = this.posX - this.centerX;
            const deltaY = this.posY - this.centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // If the object has moved beyond the max distance, reverse direction
            if (distance > this.maxDistance) {
                this.posX -= this.directionX * this.maxStep;
                this.posY -= this.directionY * this.maxStep;
                this.changeDirection();  // Change direction after reaching the boundary
            }

            // Apply the new position with a translation
            this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
        }

        // Changes the movement direction randomly
        changeDirection() {
            this.directionX = (Math.random() - 0.5) * 2;  // Randomize horizontal direction
            this.directionY = (Math.random() - 0.5) * 2;  // Randomize vertical direction
        }

        // Starts the movement of the object with intervals
        start() {
            setInterval(() => this.move(), 10);  // Move every 10ms
            setInterval(() => this.changeDirection(), Math.random() * 1500 + 500);  // Change direction at random intervals
        }
    }

    // Create and add the animated objects (bubbles) to the page
    const bubble = document.createElement("div");
    bubble.className = "movingObject";  // Add the moving object class
    const mother = document.getElementById("movingObject-container");
    for (let i = 0; i < 100; i++) {
        mother.appendChild(bubble.cloneNode(true));  // Add 100 copies of the bubble element
    }

    // Select all the moving objects and initiate their movement
    const objects = document.querySelectorAll(".movingObject");
    objects.forEach(obj => {
        const mover = new MovingObject(obj, window.innerWidth / 4-10, 200, 300, randomBaseColor);  // Create a new MovingObject instance
        mover.start();  // Start the animation
    });
});

// Initial state for the blur effect
let isBlurred = true;

// Event listener for key press
document.addEventListener('keydown', function(event) {
    // Check if the 'B' key was pressed
    if (event.key.toLowerCase() === 'b') {
        // Toggle between blur and normal state
        if (isBlurred) {
            document.getElementById('movingObject-container').style.filter = 'blur(0)';  // Remove blur
        } else {
            document.getElementById('movingObject-container').style.filter = 'blur(50px)';  // Apply blur
        }
        // Change the state
        isBlurred = !isBlurred;
    }
});
