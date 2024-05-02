// Esta función se encarga de inicializar el mapa.
function iniciarMap(){
  // Establece las coordenadas iniciales del mapa en Santiago, Chile.
  var coord = {lat:-33.20443 ,lng: -70.67474};
  
  // Crea un nuevo objeto de mapa de Google Maps, vinculándolo al elemento HTML con el ID 'map'.
  var map = new google.maps.Map(document.getElementById('map'),{
      // Configura el nivel de zoom inicial del mapa.
      zoom: 10,
      // Establece el centro inicial del mapa en las coordenadas previamente definidas.
      center: coord
  });
  
  // Crea un marcador en el mapa, utilizando las coordenadas previamente definidas.
  var marker = new google.maps.Marker({
      // Establece la posición del marcador en las coordenadas previamente definidas.
      position: coord,
      // Vincula el marcador al mapa creado anteriormente.
      map: map
  });
}
