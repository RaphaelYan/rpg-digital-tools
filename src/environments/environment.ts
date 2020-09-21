// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200/',
  firebase: {
    apiKey: 'AIzaSyDdpDIFSxmlqRuPuGwy3Hp0cNFG5dzmVhU',
    authDomain: 'rpg-digital-tools.firebaseapp.com',
    databaseURL: 'https://rpg-digital-tools.firebaseio.com',
    projectId: 'rpg-digital-tools',
    storageBucket: 'rpg-digital-tools.appspot.com',
    messagingSenderId: '458341049809',
    appId: '1:458341049809:web:13436d9f93ff1ed4106cf0',
    measurementId: 'G-60NXTP7WVM'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
