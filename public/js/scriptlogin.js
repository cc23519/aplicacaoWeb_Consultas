function mudarTab(tabId) {
    var tabs = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    var buttons = document.getElementsByClassName('tabButton');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    document.getElementById(tabId).style.display = 'flex';
    document.querySelector('[onclick="mudarTab(\'' + tabId + '\')"]').classList.add('active');
}

// function submitLogin(userType) {
//     var email = document.getElementById(userType + '-email').value;
//     var password = document.getElementById(userType + '-password').value;


//     console.log('Usuário do tipo ' + userType + ' logado com sucesso!');
// }

// function submitCadastro() {
//     var nome = document.getElementById('cadastro-nome').value;
//     var email = document.getElementById('cadastro-email').value;
//     var password = document.getElementById('cadastro-password').value;


//     console.log('Usuário cadastrado com sucesso!');
// }
