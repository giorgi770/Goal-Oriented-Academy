"""შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი, ამ სტრინგზე გამოიყენეთ find() ფუნქცია და თუ find ფუნქცია დააბრუნებს ლუწ ინდექს მაშინ ეს სტრინგი დააბრუნეთ დიდი ასოებით (upper) ხოლო თუ დააბრუნებს კენტ ინდექსს, მაშინ დააბრუნეთ ეს სტრინგი რომლის პირველი ასოც იქნება დიდი (capitalize)

test_case = ("vano motiashvili") ---> name.find("n") = "VANO MOTIASHVILI" // name.find("m") = Vano motiashvili."""

def function(word):
    for i in word:
        if word.find(i) % 2 == 0:
            return word.upper()
        else:
            return word.capitalize()
  
print(function("daviti"))