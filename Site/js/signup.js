let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let passInput = document.getElementById('passInput');
let dateInput = document.getElementById('dateInput');
let sendButton = document.getElementById('sendButton');

//Create new user
sendButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passInput.value)
        .then(function () {
            console.log('Bem vindo ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });

        create(nameInput.value, dateInput.value);
        
        let time = 1;
        setInterval(function(){
            if(time >= 0){
                document.getElementById('countdown').innerHTML = time--;
            } else {
                window.location.href='login.html'
            }
                
            }
        , 1000);
               
}); 
function create(name, bornDate){
            let data = {
                name: name,
                bornDate: bornDate
            };
            
            return firebase.database().ref().child('users').push(data);
        }
            
        firebase.database().ref('users').on('value', function (snapshot) {
            usersList.innerHTML = '';
            snapshot.forEach(function (item) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age));
                usersList.appendChild(li);
            });
        });
        
