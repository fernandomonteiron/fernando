let emailInput = document.getElementById('emailInput');
let passInput = document.getElementById('passInput');
let sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function() {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passInput.value)
        .then(function (result) {
            console.log(result);
            console.log('Autenticado ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console')
        });
});
