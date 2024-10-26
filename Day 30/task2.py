"""შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი სტრინგებისგან ---> (["vano" , "nika" , "bubazi" , "zauri"....)], დამატებით შექმენით ორი სია odd = [] და even = [], გადაუარეთ ორიგინალ სიას for ციკლით და გაიგეთ რომელი ელემენტი შედგება კენტი ასოებისგან და რომელი ლუწი, საბოლოოდ ჩაამატეთ შესაბამისი სტრინგები შესაბამის სიებში (odd / even) დიდ ასოებათ (upper) და ბოლოს დაბეჭდეთ.

test_case = (["vano" , "davit" , "zuka" , "yiyliyo"]) ---> odd = ["davit" , "yiyliyo"] / even = ["vano" , "zuka"]"""

def odd_and_even(list):
    odd = []
    even = []

    for i in range(len(list)):
        if i % 2 == 0:
            even.append(list[i].upper())
        else:
            odd.append(list[i].upper())
    print(odd)
    print(even)

odd_and_even(["giorgi", "daviti", "nikolozi" , "revazi"])
