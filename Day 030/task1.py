"""შექმენით ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნეთ ეს სტრინგდი შებრუნებულ + დიდი ასოებით (reversed / upper).
test_case = ("VaNo MoTiashvili) ---> "ILIVHSAITOM ONAV"""

def reverse_uppercase(input_string):
    reversed_string = input_string[::-1]
    uppercased_string = input_string.upper()  
    modified_string = reversed_string + uppercased_string
    return modified_string
input_str = "giorgi," "daviti," "nikolozi,"
result_str = reverse_uppercase(input_str)
print(result_str)
