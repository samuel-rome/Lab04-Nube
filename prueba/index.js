function agregarElementos(){

    var text = "";
    let array=[
     {
        nombre: "Moitorola",
      
     },
     {
        nombre: "Samgun",
      
     },
     {
        nombre: "Huawei",
      
     }];     
  
          for (var i = 0; i < array.length; i++) {
              text += '<li>'+array[i].nombre +'</li>';
          }
          
       document.getElementById("ulListado").innerHTML = text;   
  }
  
  agregarElementos();