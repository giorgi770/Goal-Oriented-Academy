#3
"""მომხმარებელს შემოატანინეთ ხუთი სიტყვა. თქვენი დავალებაა, რომ ააწყოთ ახალი სიტყვა - 
თითოეულის პირველი ასო დაამატოთ მას. საბოლოოდ კი დაბეჭდოთ ეს სიტყვა.
test case: ["Hello", "this", "is", "best", "academy"] -> "Htiba"
test case: ["Join", "Goa", "and", "become", "chad"] -> "JGabc"""
word2= ""
for i in range(5):
    word=input("enter a word: ")
    word2 = word2 + word[0]
print(word2)








