function carregar(){
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var hora2 = data.getMinutes()
if (hora >= 0 && hora < 12){
    img.src = '../manha.jpg'
    document.body.style.background = '#edc065'
    msg.innerHTML = `Bom dia! </br>Agora são<strong> ${hora}h${hora2}</strong>, tenha um ótimo dia!`
}else if (hora >=12 && hora < 18){
    img.src = '../tarde.jpg'
    document.body.style.background = '#fa8832'
    msg.innerHTML = `Boa tarde </br>
    Agora são <strong>${hora}h${hora2}</strong>, tenha uma ótima tarde!`
}else{
    img.src = '../noite.jpg'
    document.body.style.background = '#0d1d50'
    msg.innerHTML = `Boa noite!</br>
    Agora são <strong>${hora}h${hora2}</strong>, tenha uma ótima noite!`
}
}