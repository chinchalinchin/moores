import 'hammerjs'
import { 
  ApplicationConfig, 
  importProvidersFrom, 
  provideZoneChangeDetection 
} from '@angular/core';
import { 
  provideClientHydration, 
  withEventReplay,
  HammerModule
} from '@angular/platform-browser';
import { 
  provideRouter 
} from '@angular/router';
import { 
  provideAnimationsAsync 
} from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideAnimationsAsync(),
    importProvidersFrom(HammerModule)
  ]
};
