var principal=function(){


    function recuperaTexto() {
        var texto = $('#mientrada').val();
        if (texto.length > 0) {
            $('#body-detalle').append('<tr><td>' + texto + '</td></tr>')

        }
        $('#mientrada').val("");
    }

    function insertarImagenes(busqueda){
        $("#galeria img").remove()
        var url= "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

        $.getJSON(url,
            {tags: busqueda, tagmode: "any", format: "json"},
            function (data) {
                data.items.forEach(function (t) {
                    $('#galeria').append($('<img>').attr('src',t.media.m).attr('class','img-thumbnail'));
                });
            });
    }

  /*  $('#b-agregar').on('click',function(){
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
   }); */

    $('#b-descarga').on('click',function () {
        var busqueda= $('#buscar').val();
        //if(busqueda.length>4){
        insertarImagenes(busqueda);
        //}
    });
}

$(document).ready(principal);