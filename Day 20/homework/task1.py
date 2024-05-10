"""1. მომხმარებელს შემოატანინეთ სიტყვა და შეამოწმეთ არის თუ არა ის პალინდრომი. პალინდრომი არის სიტყვა, რომელიც შებრუნებულიც
 ზუსტად იგივე გამოდის - radar, level, rotor. ამ დავალებისთვის გამოიყენეთ ციკლი და indexing."""

def palindrome_checker(string):
    if string.lower() == string[::-1].lower():
        return True
    else:
        return False 
        









