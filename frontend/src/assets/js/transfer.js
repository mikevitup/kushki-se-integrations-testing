document
    .getElementById("payment-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("button").disabled = true;
        var bankId = document.getElementById("bankId").value;
        var name = document.getElementById("name").value;
        var userType = document.getElementById("userType").value;
        var documentNumber = document.getElementById("documentNumber").value;
        var email = document.getElementById("email").value;
        var description = document.getElementById("description").value;
        const kushki = new Kushki({
            merchantId: 'd22d3935caf346df9cee6168eacaa0c3',
            inTestEnvironment: true
        });
        if (bankId == "Por favor selecione su banco" && userType == "Por favor seleccione el Tipo de Persona") {
            kushki.requestTransferToken({
                documentType: 'RUT',
                documentNumber: documentNumber,
                currency: 'CLP',
                callbackUrl: 'http://localhost:4200/return.html',
                email: email,
                paymentDescription: description,
                amount: {
                    subtotalIva: 0,
                    subtotalIva0: 500,
                    iva: 0,
                },
            }, (response) => {
                if (response.token != null) {
                    console.log("TOKEN:");
                    token = response.token;
                    console.log(response);
                };
            });
        } else if (bankId != "Por favor selecione su banco" && userType == "Por favor seleccione el Tipo de Persona") {
            kushki.requestTransferToken({
                bankId: bankId,
                documentType: 'RUT',
                documentNumber: documentNumber,
                currency: 'CLP',
                callbackUrl: 'http://localhost:4200/return.html',
                email: email,
                paymentDescription: description,
                amount: {
                    subtotalIva: 0,
                    subtotalIva0: 500,
                    iva: 0,
                },
            }, (response) => {
                if (response.token != null) {
                    console.log("TOKEN:");
                    token = response.token;
                    console.log(response);
                };
            });
        } else if (bankId == "Por favor selecione su banco" && userType != "Por favor seleccione el Tipo de Persona") {
            kushki.requestTransferToken({
                userType: userType,
                documentType: 'RUT',
                documentNumber: documentNumber,
                currency: 'CLP',
                callbackUrl: 'http://localhost:4200/return.html',
                email: email,
                paymentDescription: description,
                amount: {
                    subtotalIva: 0,
                    subtotalIva0: 500,
                    iva: 0,
                },
            }, (response) => {
                if (response.token != null) {
                    console.log("TOKEN:");
                    token = response.token;
                    console.log(response);
                };
            });
        } else {
            kushki.requestTransferToken({
                bankId: bankId,
                userType: userType,
                documentType: 'RUT',
                documentNumber: documentNumber,
                currency: 'CLP',
                callbackUrl: 'http://localhost:4200/return.html',
                email: email,
                paymentDescription: description,
                amount: {
                    subtotalIva: 0,
                    subtotalIva0: 500,
                    iva: 0,
                },
            }, (response) => {
                if (response.token != null) {
                    console.log("TOKEN:");
                    token = response.token;
                    console.log(response);
                };
            });
        }
    });