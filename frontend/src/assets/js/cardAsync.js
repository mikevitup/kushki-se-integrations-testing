document
    .getElementById("payment-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("button").disabled = true;
        var email = document.getElementById("email").value;
        var description = document.getElementById("description").value;
        const kushki = new Kushki({
            merchantId: '24ba5dd69e3e44b09511b29fa6b98c29',
            inTestEnvironment: true
        });
        kushki.requestCardAsyncToken({
            totalAmount: 500,
            currency: 'CLP',
            returnUrl: 'http://localhost:4200/return.html',
            email: email,
            description: description,
        }, (response) => {
            if (response.token != null) {
                console.log("TOKEN:");
                token = response.token;
                console.log(response);
            };
        });
    });