# conversor

Este es un conversor que convierte de km <-> millas, m <-> pies, y cm <-> pulgadas.

Para cambiar de una medida a la opuesta simplemente hay que pulsar las dos flechas, y para guardar una conversión hay que pulsarle al corazón. Para eliminar dicha conversión guardada hay que pulsarle a la X al lado de esa conversión.

Esta página web se amoldea a dispositivos desde 320px hasta 1920px.

*Recuerda: antes de ejecutar cualquier versión tienes que irte a esa carpeta y hacer `npm i` para instalar todo lo necesario* (por ejemplo si quieres irte a la versión "conversion api", primero hazte un `cd` ahí y ejecuta el comando).

Esta página tiene tres versiones:

## conversor
- La página tiene las funcionalidades descritas anteriormente. Los datos se guardan en localStorage, haciendo que los datos perduren el cierre de página.

Para iniciar la página se hace `npm start`.

## conversor api
- Además de lo previamente mencionado, esta versión hace uso de una API REST sencilla, haciendo que los datos perduren el cierre del navegador.

Para iniciar la página y el servidor se hace `npm start`. (todo en un comando)

## conversor bdd
- Esta versión usa lo anterior y además le agrega una conexión a una base de datos MongoDB, haciendo que los datos perduren el cierre del servidor y aplicación.

Aquí hay un requisito previo, y es que hay que irse a `conversion bdd > bdd > server.js` y cambiar la variable `uri` (línea 14) al URI de tu base de datos MongoDB.

Para iniciar la página y las conexiones al API y a la BDD, de nuevo, se hace solamente `npm start`.

----------------

*He separado la aplicación en tres versiones diferentes porque hay cambios importantes entre ellas y quisiera que se viera el progreso de añadir más cosas al proyecto tal y como se me especifica.*

*`conversor` sigue las especificaciones del primer paso, `conversor api` las del segundo paso excepto el último punto, y `conversor bdd` las del último punto del segundo paso.*
