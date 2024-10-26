        // // მოძებნეთ ფორმა HTML-ში მისი ID-ით
        // const form = document.getElementById('userForm');
        // // როდესაც "submit" ღილაკს დააწვებით, ვალიდაციის ფუნქცია დაიწყება
        // form.addEventListener('submit', function(event) {
        //     // თავიდან ავიცილოთ ფორმის ავტომატური გაგზავნა
        //     event.preventDefault();

        //     // თითოეული ველის მნიშვნელობის მიღება
        //     const fullName = document.getElementById('fullName').value.trim();
        //     const email = document.getElementById('email').value.trim();
        //     const password = document.getElementById('password').value.trim();
        //     const favoriteColor = document.getElementById('favoriteColor').value.trim();

        //     // შევამოწმოთ ყველა ველი შევსებულია თუ არა
        //     if (fullName === "" || email === "" || password === "" || favoriteColor === "") {
        //         // თუ რომელიმე ველი ცარიელია, გამოიტანეთ შეტყობინება
        //         alert("All fields must be filled out!");
        //     } else {
        //         // თუ ყველა ველი შევსებულია, გამოიტანეთ წარმატების შეტყობინება
        //         alert("All fields are filled out!");
        //     }
        // });



        function validateForm() {
            const emailValue = form.elements.email.value;
            const passValue = form.elements.password.value;
        
            if(emailValue == '' || passValue == '') {
                alert('Please fill in all fields');
                return;
            } 
        
            console.log('Form submitted successfully');
            console.log("Email: " + emailValue);
            console.log("Password: " + passValue);
        }