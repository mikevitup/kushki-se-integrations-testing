document
    .getElementById("payment-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("button").disabled = true;
        var bankId = document.getElementById("bankId").value;
        var name = document.getElementById("name").value;
        var userType = document.getElementById("userType").value;
        var documentType = document.getElementById("documentType").value;
        var documentNumber = document.getElementById("documentNumber").value;
        var email = document.getElementById("email").value;
        var description = document.getElementById("description").value;
        const kushki = new Kushki({
            merchantId: 'd22d3935caf346df9cee6168eacaa0c3',
            inTestEnvironment: true
        });
        kushki.requestTransferToken({
            bankId: bankId,
            userType: userType,
            documentType: documentType,
            documentNumber: documentNumber,
            currency: 'COP',
            callbackUrl: 'http://localhost:4200/return.html',
            email: email,
            paymentDescription: description,
            amount: {
                subtotalIva: 0,
                subtotalIva0: 50000,
                iva: 0,
            },
        }, (response) => {
            if (response.token != null) {
                console.log("TOKEN:");
                token = response.token;
                console.log(response);
            };
        });
    });