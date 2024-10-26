//დავალება 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.map((num, index) => {
    if (index % 2 === 0) {
        return num * 2; // თუ ინდექსი ლუწია, გავამრავლოთ 2-ზე
    } else {
        return num; // თუ ინდექსი კენტია, დავაბრუნოთ რიცხვი შეუცვლელად
    }
});

console.log(result);