"""მომხმარებელს შეეკითხეთ for ციკლისთვის მინიმალური და მაქსიმალური მნიშვნელობები.
 დაპრინტეთ ამ დიაპაზონში არსებული ყველა მარტივი რიცხვი."""
operation=input("enter operation (+, -, *, /)")
num1=int(input("enter first number: "))
num2=int(input("enter second number: "))
if operation == '+':
    print(num1+num2)
elif operation == '-':
    print(num1-num2)
elif operation == '*':
    print(num1*num2)
elif operation == '/':
    print(num1/num2)
else: 
    print("operation is not valid")



