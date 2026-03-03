import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const manifestMeta = document
  .querySelector('meta[name="mfe-manifest-url"]')
  ?.getAttribute('content');

(window as Window & { __MFE_MANIFEST_URL__?: string }).__MFE_MANIFEST_URL__ =
  manifestMeta || '/api/mf-layout-manifest';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
