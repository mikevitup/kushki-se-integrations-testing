document
    .getElementById("payment-form")
        const kushki = new Kushki({
            merchantId: '24ba5dd69e3e44b09511b29fa6b98c29',
            inTestEnvironment: true
        });
        var callback = function(response) {
            if (!response.code) {
                var select = document.getElementById("bankId");
                var c = document.createElement("option");
                for (index in response) {
                    select.options[select.options.length] = new Option(response[index].name, response[index].code, index);
                }
            } else {
                console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
            }
        }
        kushki.requestBankList(callback);