document
    .getElementById("payment-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("button").disabled = true;
        var name = document.getElementById("name").value;
        var lastName = document.getElementById("lastName").value;
        var documentType = document.getElementById("documentType").value;
        var documentNumber = document.getElementById("documentNumber").value;
        var email = document.getElementById("email").value;
        var description = document.getElementById("description").value;
        const kushki = new Kushki({
            merchantId: '24ba5dd69e3e44b09511b29fa6b98c29',
            inTestEnvironment: true
        });
        if (email == "") {
            kushki.requestCashToken({
                name: name,
                lastName: lastName,
                identification: documentNumber,
                documentType: documentType,
                totalAmount: 50000,
                currency: 'COP',
                description: description,
            }, (response) => {
                if (response.token != null) {
                    console.log("TOKEN:");
                    token = response.token;
                    console.log(response);
                };
            });
        } else {
            kushki.requestCashToken({
                name: name,
                lastName: lastName,
                identification: documentNumber,
                documentType: documentType,
                email: email,
                totalAmount: 50000,
                currency: 'COP',
                description: description,
            }, (response) => {
                if (response.token != null) {
                    console.log("TOKEN:");
                    token = response.token;
                    console.log(response);
                };
            });
        }
    });