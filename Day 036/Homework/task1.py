"""1. შექმენით ფუნქცია სახელად manual_reverse, რომელიც მიიღებს დალაგებულ კოლექციას. თქვენი დავალებაა, 
რომ შეაბრუნოთ ეს კოლექცია და დააბრუნოთ ამ სახით."""

def numbers(number):
    reserved_list=[]
    for i in range(len(number) -1, -1, -1):
        reserved_list.append(number[i])
    return reserved_list

print(numbers([1,2,3,4,5]))