import { Injectable, ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { environment } from '../environments/environment';
import { Integrations } from '@sentry/tracing';

const beforeSend = (event: any, hint: any) => {
  console.log('Error sent to sentry');
  return event;
};

export function initSentry() {
  Sentry.init({
    dsn: 'https://a06fcd68143b41588286bf0e86dd55ff@o443697.ingest.sentry.io/5417793',
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ['localhost', 'https://raphaelyan.github.io'],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],
    tracesSampleRate: 1.0,
    beforeSend,
    environment: environment.production ? 'PROD' : 'DEV'
  });
}

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  handleError(error: any) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
