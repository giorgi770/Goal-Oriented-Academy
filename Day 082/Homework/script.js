// მოცემული მონაცემების შენახვის მასივი
const dataBase = [];

// ფორმის მიწვდილი მონაცემების დამუშავება
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ფორმის სესხვის თავიდან აცილება

    // მონაცემების მიღება
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // შემოწმება იმაზე, არსებობს თუ არა იმეილი მასივში
    let emailExists = false;
    for (const entry of dataBase) {
        if (entry.email === email) {
            emailExists = true;
            break;
        }
    }

    if (emailExists) {
        alert('ექაუნთი უკვე არსებობს');
    } else {
        // ახალი მონაცემების დამატება მასივში
        dataBase.push({
            name: name,
            email: email,
            password: password
        });
        alert('ექაუნთი წარმატებით შეიქმნა');
    }
});
