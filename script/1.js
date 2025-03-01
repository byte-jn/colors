document.addEventListener("DOMContentLoaded", function () {
    // Base colors as an array
    const baseColors = [
        { name: "green", rgb: "rgb(0, 255, 0)" },
        { name: "blue", rgb: "rgb(0, 0, 255)" },
        { name: "purple", rgb: "rgb(128, 0, 128)" },
        { name: "pink", rgb: "rgb(255, 192, 203)" },
        { name: "red", rgb: "rgb(255, 0, 0)" },
        { name: "orange", rgb: "rgb(255, 165, 0)" },
        { name: "yellow", rgb: "rgb(255, 255, 0)" }
    ];

    // Function to select a random base color
    function getRandomBaseColor() {
        const randomIndex = Math.floor(Math.random() * baseColors.length);
        return baseColors[randomIndex];
    }

    const colorDescriptions = {
        green: `
            <h2>Green Thoughts: Nature, Growth, and Harmony</h2>
            <p>Green is a color that is immediately associated with nature and its calming effect. It symbolizes growth, renewal, and balance. When we think of green forests, lush meadows, or spring, it evokes a deep connection to the Earth. Green tones convey a sense of calm and foster an atmosphere of well-being. It’s no surprise that many healthcare facilities and workspaces incorporate green accents to create an atmosphere of relaxation and inner peace.</p>
            <p>Green is also often associated with healing. It is the color of life and renewal – nature is in a constant cycle of growth and decay, making this color a powerful symbol for continuous change and progress. Whether in fresh leaf green or deeper emerald tones, green colors help soothe the senses, lower blood pressure, and calm the mind. In many cultures, green is considered the color of life, balance, and hope.</p>
        `,
        blue: `
            <h2>Blue Calm: Trust, Stability, and Clarity</h2>
            <p>Blue is the color of calm and vastness. It reminds us of the sky, which gazes down upon us in its infinity, and the deep, mysterious sea. This color is inextricably linked to concepts such as trust, stability, and clarity. In a world often marked by haste and stress, blue has the remarkable ability to calm and relax.</p>
            <p>Blue also has a strong psychological effect: it helps reinforce the feeling of security and serenity. In many social contexts, blue is perceived as the color of authority and reliability, which is why it is widely used in business and professional contexts. The use of blue can strengthen a sense of trust and create an atmosphere of peaceful coexistence. The blue sky and ocean invite reflection and encourage clear, focused thinking.</p>
        `,
        purple: `
            <h2>Purple Mysticism: Luxury, Creativity, and Ambition</h2>
            <p>Purple, a mix of blue and red, is a color deeply associated with luxury and elegance. In ancient times, purple was a color reserved for kings and emperors, as the dye was expensive and difficult to obtain. Purple not only stands for wealth and power but also for creative visions and deep ambitions.</p>
            <p>Psychologically, purple is often linked with fostering creativity and spiritual elevation. It is a color that stimulates the mind and creates an atmosphere of contemplation. In artistic and literary contexts, purple is often used to convey mystical or profound themes. This color inspires dreams and fantasies and gives the viewer the sense that anything is possible. Purple is the color of art, science, and spirituality, often requiring a balance between rational thought and intuitive wisdom.</p>
        `,
        pink: `
            <h2>Pink Warmth: Compassion, Playfulness, and Tenderness</h2>
            <p>Pink is a color immediately associated with warmth and kindness. It exudes a friendly, inviting atmosphere and symbolizes love, care, and compassion. Pink is a soft yet vibrant color that evokes a feeling of security and affection. It is often used in contexts related to care, family, and friendship.</p>
            <p>Whether as soft pink or a bold magenta, pink often appeals to the more playful and romantic aspects of life. It is the color of empathy, emotional expression, and carefree joy. Pink can also be seen as a symbol of positive energy and optimism, as it brings a sense of joy and well-being to the space. This color is often used in marketing and design concepts that aim to convey positive, easily accessible, and warm messages.</p>
        `,
        red: `
            <h2>Red Passion: Energy, Love, and Intensity</h2>
            <p>Red is a powerful, energetic color that can symbolize both passion and danger. It draws attention and conveys a sense of urgency and importance. Red is inextricably linked to concepts such as love, energy, and will. It is the color of intense emotions – from deep love to furious determination.</p>
            <p>Psychologically, red affects the nervous system and can accelerate the pulse, making it one of the most intense and attention-grabbing colors. It is the color of action and assertiveness. Red accents in a room or outfit can boost self-confidence and create a dynamic atmosphere. This color is often used to give energy and create a passionate, determined mood. In many cultures, red represents life and vitality – it is the color that motivates us to take action and make changes.</p>
        `,
        orange: `
            <h2>Orange – Energy and Enthusiasm</h2>
            <p>Orange is a cheerful and energetic color often associated with creativity, adventure, and positive energy. It combines the vibrancy of red with the joy of yellow, making it a color that is spontaneous and infectious. Orange is the color of autumn, harvest, and golden sunsets that bathe the day in warm light.</p>
            <p>Psychologically, orange is a color that encourages communication and collaboration. It is stimulating but not as intense as red, making it an ideal color for creative spaces and team environments. Orange is frequently used to evoke a sense of enthusiasm and a desire for adventure, without overwhelming. It is ideal for advertising that conveys energy and the desire for change. In color psychology, orange is also considered one of the most inviting colors, creating a warm and optimistic atmosphere.</p>
        `,
        yellow: `
            <h2>Yellow Joy: Clarity, Optimism, and Happiness</h2>
            <p>Yellow is the color of light and sunshine. It stands for clarity, optimism, and joy. Yellow is bright, vibrant, and can immediately convey a sense of happiness and energy. When we think of yellow, we think of the sun brightening the day and blooming flowers announcing the spring. This color is inextricably linked to positive feelings like satisfaction, prosperity, and cheerfulness.</p>
            <p>Yellow has a stimulating effect on the mind and promotes clear, positive thinking. It is often used in environments where creativity and innovation are encouraged. Yellow is ideal for spaces that radiate vitality and joy. This color is also associated with high levels of energy and activity, as it can instantly lift one’s mood. Yellow represents spring, new life, and the beginning of something big and exciting. It is the color of hope and happiness.</p>
        `
    };
    
    // Select a random base color
    const randomBaseColor = getRandomBaseColor();

    // Create a container for the color description
    const descriptionContainer = document.createElement("div");
    descriptionContainer.id = "color-description";

    // Retrieve detailed description based on the selected color
    const descriptionText = colorDescriptions[randomBaseColor.name] || "No description available.";

    // Insert the description as HTML
    descriptionContainer.innerHTML = descriptionText;

    // Insert the description container at the beginning of the body
    document.body.insertBefore(descriptionContainer, document.body.lastChild);

    // The MovingObject class that controls the animated objects
    class MovingObject {
        constructor(element, centerX, centerY, maxDistance, baseColor) {
            this.element = element;
            this.centerX = centerX;
            this.centerY = centerY;
            this.maxDistance = maxDistance;
            this.maxStep = 1;
            this.directionX = (Math.random() - 0.5) * 2;
            this.directionY = (Math.random() - 0.5) * 2;
            this.posX = centerX;
            this.posY = centerY;

            this.element.style.position = "absolute";
            this.element.style.left = `${centerX}px`;
            this.element.style.top = `${centerY}px`;
            this.element.style.backgroundColor = this.getColorVariations(baseColor.rgb);  // Apply color variations
        }

        // Creates different color variations of the base color
        getColorVariations(baseColor) {
            const baseRGB = baseColor.match(/\d+/g).map(Number);
            const variations = [];

            for (let i = 0; i < 10; i++) {  // Generate more variations
                const variation = baseRGB.map(c => {
                    const offset = Math.floor(Math.random() * 200) - 20;
                    const newColor = Math.min(255, Math.max(0, c + offset));
                    return newColor;
                });
                variations.push(`rgb(${variation[0]}, ${variation[1]}, ${variation[2]})`);
            }

            // Select a random variation
            const randomVariationIndex = Math.floor(Math.random() * variations.length);
            return variations[randomVariationIndex];
        }

        move() {
            this.posX += this.directionX * this.maxStep;
            this.posY += this.directionY * this.maxStep;
            
            const deltaX = this.posX - this.centerX;
            const deltaY = this.posY - this.centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance > this.maxDistance) {
                this.posX -= this.directionX * this.maxStep;
                this.posY -= this.directionY * this.maxStep;
                this.changeDirection();
            }
            
            this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
        }

        changeDirection() {
            this.directionX = (Math.random() - 0.5) * 2;
            this.directionY = (Math.random() - 0.5) * 2;
        }

        start() {
            setInterval(() => this.move(), 10);
            setInterval(() => this.changeDirection(), Math.random() * 1500 + 500);
        }
    }

    // Create and add the animated objects
    const bubble = document.createElement("div");
    bubble.className = "movingObject";
    const mother = document.getElementById("movingObject-container");
    for (let i = 0; i < 100; i++) {
        mother.appendChild(bubble.cloneNode(true));   
    }

    const objects = document.querySelectorAll(".movingObject");
    objects.forEach(obj => {
        const mover = new MovingObject(obj, window.innerWidth / 4-10, 200, 300, randomBaseColor);
        mover.start();
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
            document.getElementById('movingObject-container').style.filter = 'blur(0)';
        } else {
            document.getElementById('movingObject-container').style.filter = 'blur(50px)';
        }
        // Change the state
        isBlurred = !isBlurred;
    }
});
