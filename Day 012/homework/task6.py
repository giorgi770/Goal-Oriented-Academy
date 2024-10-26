"""მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ თუ არის როგორც ორის, ასევე სამის ჯერადი.
 არსებობის შემთხვევაში დაპრინტეთ ეს რიცხვი, ხოლო თუ არ იქნება მაშინ თავიდან შეეკითხეთ (გამოიყენეთ while ციკლი)."""
num=int(input("enter your number: "))
while num % 2 !=0 and num % 3 !=0:
    num= int(input("confirm a number: "))
if num % 2 == 0 and num % 3 == 0:
    print(num)
else:
    print("try again")
    num=int(input("enter a number: "))
    







