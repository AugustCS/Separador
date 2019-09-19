$(document).ready(function(){
    $("#btn-convertir").click(function(e){
        e.preventDefault();
        var txtinput = $("#tainput").val();
        var separador = $("#separador").val();
        txtinput = (txtinput).split('\n');
        var cadenageneral = "";
        for(var i = 0;i<txtinput.length;i++){
            var cadena = txtinput[i].split(separador);
            cadenageneral = cadenageneral + cadena[0] + "\n"; 
        }

        if(cadena.length === 1){
            alert("No se encontraron coincidencias");
            cadenageneral = "";
        }
        $("#taoutput").val(cadenageneral);
    })
})