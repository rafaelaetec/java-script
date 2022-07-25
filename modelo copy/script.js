function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.lenght == 0 || fano.value > ano){
            window.alert('Verifique os dados e tente novamente!')
   }else {
        alert('ok')
   }

}