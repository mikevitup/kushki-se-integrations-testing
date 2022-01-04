document
    .getElementById("payment-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("button").disabled = true;
        var email = document.getElementById("email").value;
        const kushki = new Kushki({
            merchantId: '24ba5dd69e3e44b09511b29fa6b98c29',
            inTestEnvironment: true
        });
        kushki.requestSubscriptionCardAsyncToken({
            currency: 'CLP',
            callbackUrl: 'http://localhost:4200/return.html',
            email: email,
        }, (response) => {
            if (response.token != null) {
                console.log("TOKEN:");
                token = response.token;
                console.log(response);
            };
        });
    });