"""2. შექმენით ფუნქცია სახელად manual_replace, რომელიც მიიღებს სია, ჩასანაცლებელ ელემენტს და იმ ელემენტს, 
რომლითაც უნდა ჩანაცვლდეს. თქვენი დავალებაა, რომ დააბრუნოთ ახალი კოლექცია, სადაც გექნებათ ჩანაცვლებული 
ყველა ელემენტი მესამე პარამეტრით."""


def replace(first,second,third):
    final_list = []
    for element in first:
        if element == second:
            final_list.append(third)
        else:
            final_list.append(element)
    return final_list

print(replace([15, 5, 5, 5], 5, 15))