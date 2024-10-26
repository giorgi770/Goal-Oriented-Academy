"""2. მომხმარებელს შემოატანინეთ ხუთი რიცხვი და შეიტანეთ ისინი სიაში. შემდეგ თქვენ უნდა იმუშაოთ ამ სიაზე:
 თუ რომელიმე ელემენტი სიაში ორჯერ მეორდება, დაამატეთ ის ახალ სიაში.
 საბოლოოდ გექნებათ ორი ვარიანტი: ცარიელი ახალი სია / ახალი სია სადაც იქნება მინიმუმ ერთი ელემენტი.
   თუ სია ცარიელი იქნება, დაბეჭდეთ რომ სია ცარიელია. სხვა შემთხვევაში დაბეჭდეთ ახალი სია.
test case: [1, 1, 2, 2, 3] -> [1, 2]
test case: [1, 2, 3, 4, 5] -> "List is empty"""
def manual_len(new_list):
    count = 0
    for i in new_list:
        count += 1
    return count


list = []
for i in range(5):
    num = int(input("Enter a number: "))
    list.append(num)

new_list = []
for element in list:
    if element in new_list:
        pass
    else:
        new_list.append(element)

if manual_len(new_list) == 0:
    print("Your list is empty")
else:
    print(new_list)

 




