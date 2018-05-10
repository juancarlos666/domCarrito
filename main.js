function calcularPrecio(nameClass,nameClass2,nameClass3) {
    var arrayPrecioUnitario = [];
    //Cogemos el precio por unidad de cada uno y lo convertimos a float
    var i=0;
    for (i=0;i<2;i++){
        var precioUnitatio=document.getElementsByClassName(nameClass);
        var precioUnitarioString = precioUnitatio[i].innerText;//Cojo el precio x unidad
        var precioXUnidad=precioUnitarioString.substring(1, precioUnitarioString.length);
        var precioUnitarioFloat=parseFloat(precioXUnidad);//convertimos a float
        arrayPrecioUnitario.push(precioUnitarioFloat);
    }
    var arrayNumPedidos=[];
    //Cogemos el input y lo convertimos a int
    i=0;
    for (i=0;i<2;i++){
        var numPedidos=document.getElementsByClassName(nameClass2);
        var cantidadString = numPedidos[i].value;//Cojo la cantidad de pedidos
        var precioUnitarioInt=parseInt(cantidadString);//convertimos a int
        arrayNumPedidos.push(precioUnitarioInt);
    }
    var precioTotal=[];
    i=0;
    for (i=0;i<2;i++){
        //Calculamos el total
        var total=arrayPrecioUnitario[i]*arrayNumPedidos[i];
        precioTotal.push(total);
        document.getElementsByClassName(nameClass3)[i].innerHTML=precioTotal[i];
    }   
}
function deleteProduct(nameId){
    var delete2=document.getElementById(nameId);
    delete2.remove();
}

