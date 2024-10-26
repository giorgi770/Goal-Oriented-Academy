password="1234"
attempt=1
user_password = input("enter your password: ")
lock = "system blocked"
while user_password != password and attempt <= 5: 
    user_password== input("enter your password: ")
    if password == user_password: 
        print("you have accesses: ")
        
    else:
        print("inccorect try again")
        print("attempt")
        attempt+=1
        if attempt > 5:
            print("out of attemps")
            print(lock)