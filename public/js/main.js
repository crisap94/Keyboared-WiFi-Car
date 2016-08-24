
if ("WebSocket" in window) {
  console.log("WebSocket is supported by your Browser!");

  var Socket = new WebSocket('ws://localhost:3000');

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
    Socket.send("Message to send");
    console.log("Message is Sent");
  };

  Socket.onmessage = function(text){
    var message = text.data;
    console.log("Message received :" + message);
  };

  Socket.onopen;
} else {
  console.log("WebSocket NOT supported by your Browser!");
}

var datos = {
    "up":false,
    "down":false,
    "right":false,
    "left":false
  };

  function enviarDatos(){
      var stringJson = JSON.stringify(datos);
      Socket.send(stringJson);
    }

$(document).ready(function(){
  $(document).keyup(function(tecla){
        if(tecla.which == 37){//Flecha Izquierda
          datos.left = false;
		  $(".arrowLeft, :after").css("background","#C7E0E5");
        }
        if(tecla.which == 38){//Flecha Arriba
            datos.up = false;
			      $(".arrowTop, :after").css("background","#C7E0E5");
          }
          if(tecla.which == 39){//Flecha Derecha
            datos.right = false;
			      $(".arrowRight, :after").css("background","#C7E0E5");
          }
          if(tecla.which == 40){//Flecha Abajo
            datos.down = false;
			      $(".arrowBottom, :after").css("background","#C7E0E5");
          }
      });
      $(document).keydown(function(tecla){
        if(tecla.which == 37){//Flecha Izquierda
          datos.left = true;
		      $(".arrowLeft, :after").css("background","#000");
        }
        if(tecla.which == 38){//Flecha Arriba
            datos.up = true;
			      $(".arrowTop, :after").css("background","#000");
          }
          if(tecla.which == 39){//Flecha Derecha
            datos.right = true;
			      $(".arrowRight, :after").css("background","#000");
          }
          if(tecla.which == 40){//Flecha Abajo
            datos.down = true;
			      $(".arrowBottom, :after").css("background","#000");
          }
      });
});
