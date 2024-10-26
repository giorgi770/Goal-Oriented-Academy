"""5) შექმენით სია სადაც გექნებათ 1-10 ჩათვლით რიცხვები, for ციკლის გამოყენებით
 დაბეჭდეთ მხოლოდ კენტი რიცხვების ჯამი და ნამრავლი"""

list1=(1,2,3,4,5,6,7,8,9,10)
result1= 0
result2= 1
for i in list1:
    if i % 2 != 0:
        result1 = result1 + i
        result2 = result2 * i
print(result1)
print(result2)









