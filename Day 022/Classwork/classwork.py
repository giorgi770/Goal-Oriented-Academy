name="giorgi"
print(name[3:7])


name="luka"
slice
print(name[2:7])



"""დავალება: შექმენით თქვენი ხელით range-ის ფუნქციონალი"""

list=[]
for i in range(5):
    name=input("enter a string: ")
    list.append(name)
print(list)



"""დავალება2: შექმენიტ თქვენი ხელით slicing-ის ფუნქციონალი"""


numbers=[]
for i in range(10,21):
    numbers.append(i)
sliced_numbers=numbers[::2]
print(sliced_numbers)

numbers=[]
for i in range(10,21,2):
    numbers.append(i)
print(numbers)








"""დავალება3: შექმენით სთრინგი და ჩამოაჭერით სამი სიმბოლო slicing-ის გამოყენებით"""

strings =input("enter a string: ")
first = strings[:3]
second = strings[3:6]
third = strings[6:9]
print(first)
print(second)
print(third)




"""დავალება4: შექმენით range-ის ალგორითმი სადაც გექნებათ step -1ის ტოლი, ანუ იქნება კლებადობით."""


def decrase_range(start, end, step= -1): #third is step
    return list(range(start, end, step))
start= 7
end= 0
decrase_range= decrase_range(start, end)
print(decrase_range)

"""დავალება5: შექმენით ალგორითმი, სადაც შეაბრუნებთ სიას slicing-ის გამოყენებით,
  აქაც დაგჭირდებათ უარყოფითი მნიშვნელობის სტეპი - დაწერეთ თქვენი ალგორითმი"""


def reverse_list(first):
    return first [::-1]
list= [7,8,9,10,1,20]
reversed_list= reverse_list(list)
print(reversed_list)


"""3) ბონუსი: შექმენით 8 ელემენტიანი სია, და slice ინგის გამოყენებით გამოიტანეთ მხოლოდ ლუწ ინდექსებზე მდგომი რიცხვები
[19:21]
მინიშნვბა: როგორც range() მუშაობს ისე იმუშავებს slice ინგიც"""


my_list=[1,2,3,4,5,6,7,8]
indices_numbers=my_list[::2]
print(indices_numbers)





