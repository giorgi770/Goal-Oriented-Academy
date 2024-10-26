"""მომხმარებელს შეეკითხეთ for ციკლისთვის მინიმალური, მაქსიმალური მნიშვნელობები და step-ის რიცხვი.
 ამ მნიშვნელობებით მოახდინეთ ციკლის მუშაობა და დაპრინტეთ თითოეული რიცხვი."""
start= int(input("enter your start number: "))
end=int(input("enter your end number: "))
step=int(input("enter the step value: "))
for i in range(start, end+1, step):
    print(i)

