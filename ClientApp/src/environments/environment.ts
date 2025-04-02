// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  test: false,
  baseUrl: '',
  //API_URI: 'http://localhost:5250/api/',
  //MG_URL: 'https://localhost:7299/microgateaway/',
  //MG_URL: 'http://localhost:5157/microgateaway/',


/*   API_URI: 'http://localhost:5157/api/',
  MG_URL: 'http://localhost:5157/microgateway/', */

  API_URI: '/api/',
  MG_URL: '/microgateway/',
  useHash: false,
  loginIDM: false,
  environmentName: 'development' // Nome personalizzato dell'ambiente
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
