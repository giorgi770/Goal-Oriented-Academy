"""დაწერეთ პროგრამა, რომელიც დაბეჭდავს ყველა რიცხვს 1-დან 50-მდე. სამის ჯერადებისთვის დაბეჭდეთ "Fizz"
 რიცხვის ნაცვლად, ხოლო ხუთეულის ჯერადებისთვის დაბეჭდეთ "Buzz". რიცხვებისთვის, რომლებიც სამისა და ხუთის ჯერადები არიან, დაბეჭდეთ "FizzBuzz"""

for i in range(1,51):
    if i % 3 == 0:
        print("fizz")
    elif i % 5 == 0:
        print("buzz")
    elif i % 3 and i % 5 == 0:
        print("fizzbuzz")
    else:
        print(i)



