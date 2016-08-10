
if ("WebSocket" in window) {
  console.log("WebSocket is supported by your Browser!");

  var Socket = new WebSocket(localhost:3000);

  switch (Socket.readyState) {
    case 0:
      console.log("La conexion no pudo ser establecida");
    break;

    case 1:
      console.log("La conexion está establecida y la comunicacion es posible");
    break;

    case 2:
      console.log("Conexion a traves del Handshake");
    break;

    case 3:
      console.log("Conexion cerrada o no pudo ser abierta");
    break;
  }

  Socket.onopen = function() {
    // Web Socket is connected, send data using send()
    ws.send("Message to send");
    console.log("Message is Sent");
  };

  Socket.onmessage = function(text){
    var message = text.data;
    console.log("Message received :" + message);
  };

} else {
  console.log("WebSocket NOT supported by your Browser!");
}

$(document).ready(function(){
  var datos = {
    "up":false,
    "down":false,
    "right":false,
    "left":false
  };

  //Teclas Presionadas
  $(document).keypress(function(tecla){
    if(tecla.which == 37){//Flecha Izquierda
      datos.left = true;
      console.log(datos);
    }
  });

  $(document).keypress(function(tecla){
    if(tecla.which == 38){//Flecha Arriba
      datos.up = true;
      console.log(datos);
    }
  });

  $(document).keypress(function(tecla){
    if(tecla.which == 39){//Flecha Derecha
      datos.right = true;
      console.log(datos);
    }
  });

  $(document).keypress(function(tecla){
    if(tecla.which == 40){//Flecha Abajo
      datos.down = true;
      console.log(datos);
    }
  });

  //Tlecas Soltadas

  $(document).keyup(function(tecla){
    if(tecla.which == 37){//Flecha Izquierda
      datos.left = false;
      console.log(datos);
    }
  });

  $(document).keyup(function(tecla){
    if(tecla.which == 38){//Flecha Arriba
      datos.up = false;
      console.log(datos);
    }
  });

  $(document).keyup(function(tecla){
    if(tecla.which == 39){//Flecha Derecha
      datos.right = false;
      console.log(datos);
    }
  });

  $(document).keyup(function(tecla){
    if(tecla.which == 40){//Flecha Abajo
      datos.down = false;
      console.log(datos);
    }
  });

})
