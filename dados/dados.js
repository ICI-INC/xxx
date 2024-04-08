function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login = "1" && senha == "1"){
        alert('Sucesso');
        location.href = "https://ici-inc.github.io/icitv/home.html";
    }else{
        alert('Usuario  ou senha incorretos')
    }
            
}
