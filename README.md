# Colors

It's a color gradiant with info. Below the color bubble is a description about the color. 

# Key Features

Random Base Color Selection:
The script starts by defining a list of base colors (green, blue, purple, pink, red, orange, and yellow) with their corresponding RGB values.
A random color is selected from this list using the getRandomBaseColor() function.
Color Descriptions:

For each color, a detailed description is provided in the colorDescriptions object. This includes information about the color's psychological and cultural associations.
The description is inserted into the webpage under a div with the ID color-description.

Moving Objects:
A MovingObject class is defined to create elements that move randomly within a specified distance. The objects are styled using the randomly chosen base color, which is modified with small variations to create a more dynamic effect.
The move() method continuously updates the position of each object, and if the object moves too far from its starting point, it changes direction.
The objects are displayed within a container element identified by #movingObject-container, and there are 100 such objects created to populate the screen.

Object Animation:
The objects start moving by calling the start() method, which uses setInterval to repeatedly update their positions and change their direction over time.
The objects will appear to move in various directions and change colors, creating a dynamic and visually appealing effect.

Blur Effect Toggle:
The webpage initially has a blur effect applied to the #movingObject-container. The user can toggle this blur effect by pressing the 'B' key on the keyboard.
When the 'B' key is pressed, the filter property of the container element is toggled between blur(0) (clear) and blur(50px) (blurred), changing the visual state of the objects.

How it Works
The page loads and displays a randomly selected color's description in the center of the screen.
The objects begin moving based on the random color choice, and the user can toggle the blur effect by pressing the 'B' key on the keyboard.
This script enhances user experience with interactive and visually engaging animations and color-based effects.
