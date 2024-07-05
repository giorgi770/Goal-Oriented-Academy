"""7) დაწერეთ პროგრამა, რომელიც ბეჭდავს კვირის დღეს მომხმარებლის მიერ შეყვანილი რიცხვის საფუძველზე 
(1 ორშაბათისთვის, 2 სამშაბათისთვის და ა.შ.) if, elif და სხვა გამოყენებით. USE IF-ELIF-ELSE"""
week= int(input("enter your between 1-7: "))
if week == 1:
    print("that's sunday")
elif week == 2:
    print("thats monday")
elif week == 3:
    print("thats tuesday")
elif week == 4:
    print("thats wednesday")
elif week == 5:
    print("thats thursday")
elif week == 6:
    print("friday")
elif week == 7:
    print("saturday")
else:
    print("it's wrong")
