from turtle import *
import math

sides = int(input('How many sides do you want your shape to have? '))
pen_color = str(input('What color do you want your shape to be?'))


### Color of shape
pencolor(pen_color)
### Write your code below:
if sides>2:
    t = Turtle()
    setup(600,600)

    count=0
    while count<sides:
        right(360/sides)
        forward(50)
        count+=1

        counting=0
        while counting<sides:
            left(360/sides)
            forward(50)
            counting+=1
        ###print (count)
### Close window on click.
exitonclick()
