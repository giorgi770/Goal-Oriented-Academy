"""შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი ყველანაირი სტრინგისგან (დიდი ასოებით / პატარა ასოებით : "vano" , "LUKA") , გადაურეთ ამ სიას და თუ ეს კონკრეტული ელემენტი არის შემდგარი დიდი ასოებისგან, დაამატეთ სიაში ისე როგორც lower, ხოლო თუ შედგება პატარა ასოებისგან დაამატეთ სიაში ისე როგორც upper / !HINT : გადახედეთ ფუნქციებს, isupper() და islower()!

test_case = (["vano" , "DAVIT" , "LUKA" , "nika"]) ---> result_list = ["VANO" , "davit" , "luka" , "NIKA"]"""

def low_up(list):
    new_list = []
    for i in list:
        if i.isupper() == True:
            new_list.append(i.lower())
        elif i.islower() == True:
            new_list.append(i.upper())
    return new_list
print(low_up(["jemaliko" , "rajiko" , "sergia" , "sernugzar"]))

