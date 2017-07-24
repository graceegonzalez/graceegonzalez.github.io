from numpy import *

# Each of our grades
kristen_grades = [90, 85, 100, 77, 94]
clarisse_grades = [96, 83, 89, 97, 86]
sapna_grades = [82, 91, 94, 87, 99]

# Class grade book
grade_book = [kristen_grades, clarisse_grades, sapna_grades]

'''
This is what our grade book looks like
[	[90, 85, 100, 77, 94]
	[96, 83, 89, 97, 86]
	[82, 91, 94, 87, 99] ]

'''

# Traverse through the grade book and print all the indivdual grades
for x in grade_book:
	for g in x:
		print(g)
print()

# Extensions: Find the class average, median, and standard deviation
# (For the extentions google for hints!)

# Code for class average

sum=0
for x in grade_book:
	for g in x:
		sum=sum+g

print((sum)/(len(kristen_grades+clarisse_grades+sapna_grades)))
print()


# Super extra extensions: calculate the student with highest/lowest average

sum=0
for a in kristen_grades:
	sum=sum+a

kristen_average = int((sum)/(len(kristen_grades)))
print(kristen_average)

sum=0
for a in clarisse_grades:
	sum=sum+a

clarisse_average = int((sum)/(len(kristen_grades)))
print(clarisse_average)

sum=0
for a in sapna_grades:
	sum=sum+a

sapna_average = int((sum)/(len(kristen_grades)))
print(sapna_average)

print()

grades_average=[kristen_average,clarisse_average,sapna_average]

largest=grades_average[0]
for large in grades_average:
    if large > largest:
        largest=large
print(largest)



smallest=grades_average[0]
for small in grades_average:
    if small < smallest:
        smallest=small
print(smallest)
