#1
family=["deda"], ["mama"], ["da"]
family.index
print(family)
#2
list = [1,2,3,4,5,6,7,8,9,10]

print(list[0],list[9])
#3
for i in range(10, 20):
    i= i + 1
    print(i)
#4
user_name = input("please enter a name: ")
user_lastname = input("please enter a lastname: ")
user_age = int(input("please enter your age: "))
user_location = input("please enter a your home location: ")
user_mail = input("please enter a your mail: ")

list = []
list.append(user_name)
list.append(user_lastname)
list.append(user_age)
list.append(user_location)
list.append(user_mail)

print(list)
#5
lastname = ("varazashvili")
print(lastname[0],lastname[1],lastname[2],lastname[3],lastname[4],lastname[5],lastname[6],lastname[7],lastname[8],lastname[9])
