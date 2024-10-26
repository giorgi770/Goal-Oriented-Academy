def calculateAverage(numbers):
    if len(numbers) == 0:  
        return 0
    return sum(numbers) / len(numbers)

numbers = [5, 6, 7, 8, 9, 10]
average = calculateAverage(numbers)
print(average)  
