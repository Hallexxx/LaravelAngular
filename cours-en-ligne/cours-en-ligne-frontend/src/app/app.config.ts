import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Assurez-vous d'importer cela
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import des animations

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()), // Ajout correct ici
    BrowserAnimationsModule, // Ajout des animations dans la configuration
  ],
};
