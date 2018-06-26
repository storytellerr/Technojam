// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: "AIzaSyD2-unOOJ5Ma13JkxUuxnE8poAo93ARd-s",
    authDomain: "technojam-app.firebaseapp.com",
    databaseURL: "https://technojam-app.firebaseio.com",
    projectId: "technojam-app",
    storageBucket: "technojam-app.appspot.com",
    messagingSenderId: "904557560073"
  }
};
