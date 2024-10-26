let counter = 0; // საწყისი მნიშვნელობა
document.getElementById("incrementBtn").addEventListener("click", function() {
    counter++; // counter-ს მნიშვნელობის გაზრდა ერთით
    document.getElementById("counter").textContent = counter; // პარაგრაფის ტექსტის განახლება
});