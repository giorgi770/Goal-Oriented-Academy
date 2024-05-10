"""2. for ციკლით შექმენით 10-იდან 20-ის ჩათვლით არსებული მთელი რიცხვების სია. 
შემდეგ გამოიყენეთ slicing, სადაც სტეპი იქნება 2-ის ტოლი."""

numbers=[]
for i in range(10,21):
    numbers.append(i)
sliced_numbers=numbers[::2]
print(sliced_numbers)

numbers=[]
for i in range(10,21,2):
    numbers.append(i)
print(numbers)