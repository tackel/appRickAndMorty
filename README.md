# appRickAndMorty
Challege React Native - Fernando Verri

App de Rick and Morthy.

Consta de una pantalla de registro, login y reset pasword implementado por medio de Supabase Auth. 
Para el registro y reset pasword cree una pagina en vercel.com para que al recibir el correo de confirmación de registro tener una pagina de redireccion. 
En el caso de reset en esta pagina se captura el token enviado por la url y asi poder cambiar la contraseña. 

Repositorio del reset: https://github.com/tackel/resetRyM

La app esta hecha con React-native y typeScript. Contiene 3 items en el botton tabs: 
personajes, lugares y episodios. En el drawer tienen funciones: ir a la app, ver datos del sistema, logout y cerrar el drawer. 
Los datos se obtuvieron mediante apollo client utilizando graphql

El codigo fue realizado para funcionar con android, ya que no cuento con equipo para desarrollarlo en ios.
