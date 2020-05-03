function mudaFoto (foto) {
    if (foto == 1) {
        arquivo = "https://static.quizur.com/i/b/5706c656110cf7.02351079Charlie-Brown-Jr.png";
    }
    if (foto == 2) {
        arquivo = "https://i.ytimg.com/vi/jf4mYkBlza0/maxresdefault.jpg";
    }
    if (foto == 4) {
        arquivo = "https://static.cloud-boxloja.com/lojas/slvlh/produtos/c996bb28-e854-4e8a-b535-cec63aa37c6a.png";
    }
    if (foto == 5) {
        arquivo = "http://www.tribernna.com/wp-content/uploads/2019/03/linha-de-tempo-chorao-20110812-21-original-678x381.jpeg";
    }
    document.getElementById("imagem").src = arquivo;
}
function loko() {

    var resul = document.querySelector("fieldset#pedido");
    resul.innerHTML = `Pedido enviado com sucesso`
}
function color() {
    let agora = new Date();
    let hora = agora.getHours();
    let corpo = document.body    

    if (hora <=1 && hora <=12) {
        corpo.style.background = "rgb(30, 180, 218)"
    } else if (hora >12 && hora <=18) {
        corpo.style.background = "rgb(192, 194, 82)"
    } else {
        corpo.style.background = "rgb(90, 90, 90)"
    }
}