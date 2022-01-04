document
    .getElementById("payment-form")
        const kushki = new Kushki({
            merchantId: 'd22d3935caf346df9cee6168eacaa0c3',
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