"""დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს და თქვენ გამოიტანთ ამ რიცხვის ფაქტორიალს, 
შეასრულეთ for loop-ით."""
product=1
num=int(input("enter your number: "))
for i in range(1,num+1):
    product*= i
print(num, "final_factorial", product)