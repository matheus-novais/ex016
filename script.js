function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() //data atual
var hora = data.getHours() + ' horas e ' + data.getMinutes() + ' minutos'

//hora atual
msg.innerHTML = `Agora são ${hora}!`
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha.png'
} else if (hora > 18 && hora <= 23) {
    //boa tarde
    img.src = 'noite.png'
} else {
    //boa noite
    img.src = 'tarde.png'
}
}