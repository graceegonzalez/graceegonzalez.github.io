#Creating and Printing a grocery list
'''grocery_list = ["10 carrots", "bananas", "fish", "apples", "salad"]


for x in range (len(grocery_list)):
    print(grocery_list[x])

for item in grocery_list:
    print(item)
    '''
#creating a random generator for a business
'''import random

names1 = ["Bob's", "Larry's","Alice's","Claire's","Kylie's"]
jobs = ["Bakery", "Cooking Shop", "Bed and Breakfast", "Hair Saloon", "Hardware Shop", "General Store"]

print(random.choice(names1))
print(random.choice(jobs))
'''

#creating a random menu generator
'''
import random

sides = ["Corn Pudding", "Alfredo Sauce", "Sweet Potato Casserole", "Onion Roasted Potatoes", "Broccoli Cheese Bake", "Garlic Mashed Potatoes", "Twice Baked Potato Recipe."]
main_course = ["Beef Enchiladas", "Brown Sugar Kielbasa & Sauerkraut", "Crab Cakes with Remoulade Sauce", "Meatloaf", "Frito Pie", "General Tso’s Chicken", " Greek Lamb Gyros with Tzatziki Sauce"]
desserts = ["Brownie", "Cheesecake", "Pudding", "Crème brûlée", "Custard", "Apple Pie"]


print("The side for tonight will be " + random.choice(sides))
print("The main course for tonight will be "+ random.choice(main_course))
print("The dessert for tonight will be "+ random.choice(desserts))
'''
#creating a Haiku generator
import random

five_syllable = ["An old silent pond", "Autumn moonlight","into the chestnut", " "]
seven_syllable = [""]
