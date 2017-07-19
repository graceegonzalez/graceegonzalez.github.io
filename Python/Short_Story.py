start='''
You look over at your alarm. It reads "6:30", you are running late to catch your 7:10 bus!
You jump out of your bed and quickly grab some clothing (which may or may not be matching).
Rushing down the stairs you grab a granola bar before running up the street to the bus stop.

You can't see the bus in sight.

Do you want to run along the bus route to guarantee you will get a seat for the hour long commute?
Or do you want to wait at the current bus stop but risk having to stand for the hour long commute?
'''

print(start)
print("Type 'run' to go run along the bus route or 'wait' to wait for the bus at this stop.")
user_input = input()
if user_input == "run":
    print("You decide to run along the bus route. You make it 10 blocks and the bus isn't in sight. Do you want to run one more block to or wait at this stop?")
    print("Type 'run' to go run along the bus route or 'wait' to wait for the bus at this stop.")

    user_inpute = input()
    if user_input =="run":
        print("You decided to run one more block along the bus route. Half way down the block you saw the bus pass you. You missed the bus and were late to work. Your boss is mad at you.")

    elif user_input == "wait":
        print("You decided to wait at this bus stop! Good choice! 5 minutes later the bus came and you got a seat! There was no traffic and you made it to work on time.")

    elif user_inpute != "run" or "wait":
        print("Type 'run' to go run along the bus route or 'wait' to wait for the bus at this stop.")

elif user_input == "wait":
    print("You choose to go wait at this bus stop. You ended up waiting 10 minutes and when the bus came there were no seats. Do you want to stand on this bus, or wait for the next bus to come?")
    print("Type 'stand' to stand on this bus or 'wait' to wait for the next bus at this stop.")

    user_inpute = input()
    if user_input =="stand":
        print("You decided to stand on the bus. The bus got stuck in traffic for two hours. You ended up being late to an important meeting and you were fired.")

    elif user_input == "wait":
        print("You decided to wait for the next bus. It didn't end up coming for 30 more minutes and although you got a seat on the next bus the bus hit traffic and you were late to work and later fired.")

    elif user_inpute != "stand" or "wait":
        print("Type 'stand' to stand on this bus or 'wait' to wait for the next bus at this stop.")

elif user_inpute != "run" or "wait":
    print("Type 'run' to go run along the bus route or 'wait' to wait for the bus at this stop.")
