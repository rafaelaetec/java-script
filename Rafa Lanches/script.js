function verificar(){
    var piano = window.document.getElementsByName ('tecla')
    var local = window.document.getElementsByName ('local')
    var res = document.getElementById('res')
    var img = document.createElement ('img')
    imagem.setAttribute('id','foto')
    var tipo = ''
    if(piano == tecla[0].checked){
        tipo = 'Teclado'
        if(local == local[0].checked){
        img.setAttribute ('src','piano.png')
        }else{
            img.setAttribute ('src','piano')
        }
    }
    res.appendChild(img)
}