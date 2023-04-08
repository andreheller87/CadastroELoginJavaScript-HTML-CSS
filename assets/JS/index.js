
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  if(userLogado != null){
    
    window.location.href = "../../home.html";
  }
  logado.innerHTML = `Olá ${userLogado.nome}`;

  logado.i
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/HTML/signin.html";
  }

  function logar() {
    
    window.location.href = "./assets/HTML/signin.html";
  }