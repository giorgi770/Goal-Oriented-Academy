"""8) დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს რიცხვს და ბეჭდავს არის თუ არა ის ლუწი, კენტი თუ ნულის, 
Gამოყენებით if, elif და სხვა."""
user_input= int(input("please enter a number: "))
if user_input % 2 == 0:
    print("number is even")
elif user_input == 0:
    print("number is zero")
else:
    print("number is odd")
