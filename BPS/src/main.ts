import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '../src/vendor/jquery/jquery.min.js';
import '../src/vendor/bootstrap/js/bootstrap.bundle.min.js';


import '../src/vendor/jquery-easing/jquery.easing.min.js';
import '../src/vendor/scrollreveal/scrollreveal.min.js';
import '../src/vendor/magnific-popup/jquery.magnific-popup.min.js';
import './assets/min';
import './assets/datepick'


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
