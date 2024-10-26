"""შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი სტრინგებისგან, გადაუარეთ ამ სიას და შეამოწმეთ თუ მისი characterების რაოდენობა არის ლუწი,
 ჩაამატეთ ეს კონკრეტული სიის ელემენტი ახალ ცარიელ სიაში და გადააკეთეთ იგი upper ფუნქციით, თუ იქნება ამ სტრინგის ასოების რაოდენობა კენტი,
 ჩაამატეთ ეს ელემენტი ახალ სიაში რომელსაც პირველი character ექნება გადიდებული, დანარჩენი პატარა. საბოლოოდ გამოიტანეთ ეს სია.

test_case = (["goa_best" , "vano" , "nesvi" , "tskhVarAdzE"]) ---> result = ["GOA_BEST" , "VANO" , "Nesvi" , "Tskhvaradze"]"""

def filter(list):
    result = []

    for i in list:
        if len(i) % 2 == 0:
            result.append(i.upper())
        else:
            result.append(i.capitalize())
    return result

print(filter(["zviadi","nugzari","jora,","basasuna"]))