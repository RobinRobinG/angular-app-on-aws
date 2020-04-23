import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const oauth = {
  domain: 'shopping-app.auth.us-west-2.amazoncognito.com',
  scope: ['openid', 'email', 'phone', 'profile', 'aws.cognito.signin.user.admin'],
  redirectSignIn: 'http://localhost:4200',
  redirectSignOut: 'http://localhost:4200',
  responseType: 'code',
  options: {
    AdvancedSecurityDataCollectionFlag: false
  }
};

Auth.configure({
  oauth
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
