from PIL import Image

# RGB values for recoloring.
darkBlue = (0, 51, 76)
red = (217, 26, 33)
lightBlue = (112, 150, 158)
yellow = (252, 227, 166)

# Import image
# change IMAGENAME to the path on your computer to the image
# you're using'''

my_image = Image.open("friends.jpg")
my_image.show();



# each pixel is represented in the form
# (red value, green value, blue value, transparency)

image_list = my_image.getdata()


# Turns the sequence above into a list, it can be iterated through
# in a loop
image_list = list(image_list)
print(len(image_list))

print(image_list[0][0])

recolored = []

for x in image_list:
    pixel=x[0] + x[1] + x[2]


    if pixel<182:
        new = darkBlue
        recolored.append(new)
    if pixel>=182 and pixel<364:
        new = red
        recolored.append(new)
    if pixel>=364 and pixel<546:
        new = lightBlue
        recolored.append(new)
    if pixel>=546:
        new = yellow
        recolored.append(new)



# list that will hold the pixel data for the new image

#**************************************************#
#**************************************************#

#YOUR CODE to loop through the original list of pixels and
# build a new list based on intensity should go here.



#**************************************************#
#**************************************************#
# Create a new image using the recolored list. Display and save
# the image.

# Creates a new image that will be the same size as the original
new_image = Image.new("RGB", my_image.size)

# Adds the data from the recolored list to the image
new_image.putdata(recolored)

# Opens the new image on the screen
new_image.show()

# Saves the new image as "recolored.jpg"
new_image.save("recolored.jpg", "jpeg")
