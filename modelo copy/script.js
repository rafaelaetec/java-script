function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var img = document.createElement('img')
   img.setAttribute('id','foto')
   var res = document.getElementById('res')
   if(fano.value.lenght == 0 || fano.value.lenght >= ano){
            window.alert('Verifique os dados e tente novamente!')
   }else{
      var fsex = window.document.getElementsByName ('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement ('img')
      img.setAttribute ('id','foto')
      if(fsex[0].checked){
         genero = 'Homem'
         if(idade >= 0 && idade <=12){
            img.setAttribute('src', 'menino.jpg')
         }else if( idade <= 30){
            //jovem
            img.setAttribute('src','jovemhomem.jpg')
         }else if (idade < 50 ) {
            //idoso
            img.setAttribute('src','idoso.jpg')
         }
      }else if (fsex[1].checked){
         genero = 'Mulher'
         if(idade >= 0 && idade <=12){
            img.setAttribute ('src','menina.jpg') 
         }else if( idade <= 30){
            //jovem
            img.setAttribute('src','jovemmulher.jpg')
         }else if (idade < 50 ) {
            //idoso
            img.setAttribute('src','idosa.jpg')
         }
      }

   } 
   res.style.textAlign ='center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos`
   res.appendChild (img)
   } 