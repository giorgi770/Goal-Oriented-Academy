"""მომხმარებელს შეაყვანინეთ რიცხვი და განაგრძეთ კითხვა მანამ, სანამ არ შეიტანს დადებით რიცხვს."""
user_num=int(input("enter a positive number: "))
while user_num < 0:
    user_num=int(input("enter a positive number"))
print("finally the number is positive")


