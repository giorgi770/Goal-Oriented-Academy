user_budget=int(input("user balance: "))
print(input("what do you want to purchuse: "))
item_value=int(input("price of the item: "))
if user_budget > item_value: 
    print(input("confirm purchuse: "))
    print("offer purchased")
else:
    print("sorry, payment is not possible due to insufficient balance")









