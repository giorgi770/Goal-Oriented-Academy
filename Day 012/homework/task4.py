"""მომხმარებელს შემოატანინეთ სამკუთხედის სამი გვერდი და შეამოწმეთ თუ არსებობს ის.
არსებობის შემთხვევაში დაპრინტეთ, რომ მონაცემები სწორია,
სხვა შემთხვევაში შემოატანინეთ გვერდების მნიშვნელობები თავიდან ( გამოიყენეთ while ციკლი )."""
print("value the triangle sides")
s1=int(input("enter firts sides of the triangle: "))
s2=int(input("enter second sides of the triangle: "))
s3=int(input("enter thirt sides of the triangle: "))
overall=(s1+s2>s3) and (s1+s3>s2) and (s2+s3>s1)
while overall != True:
    s1=input("please enter side one: ")
    s2=input("please enter side two: ")
    s3=input("please enter side three: ")
    overall=s1+s2>s3



