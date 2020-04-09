import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  const html = `
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52202995-5"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-52202995-5');
  </script>
`;

  document.write(html);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
