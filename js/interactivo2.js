var principal=function(){


    function recuperaTexto() {
        var texto = $('#mientrada').val();
        if (texto.length > 0) {
            $('#body-detalle').append('<tr><td>' + texto + '</td></tr>')
            $('#mientrada').val("");
        }
    }

    $('#b-agregar').on('click',function(){
      console.log('Agregar');
        recuperaTexto();

   });

    $('#mientrada').on('keypress',function(event){
      if (event.keyCode==13){
          recuperaTexto();
      }
      console.log(event.keyCode);
   });

   $('#b-borrar').on('click',function(){
      console.log('Borrar');
       $("#body-detalle tr:last-child").remove();
   });

   $("#b-descarga").on('click', function(){
       console.log('Descarga');

       var miarreglo=["uno","dos","tres"];
       miarreglo.push("cuatro");

       miarreglo.forEach(function(valor){
           console.log(valor)
       })


   });
}

$(document).ready(principal);