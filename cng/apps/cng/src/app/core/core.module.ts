import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';
import { MULTI_CONFIG } from '../tokens/MULTI_CONFIG';
import { AuthGuardService } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

export const initAppConfigData = (configService: ConfigService) => {
  return () => {
    console.log('init app data');
  };
};
export const initAppConfigDataBlocking = () => {
  return () => new Promise((resolve) => resolve('done'));
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: ConfigService, useClass: ConfigService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfigData,
      multi: true,
      deps: [ConfigService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfigDataBlocking,
      multi: true,
    },
    { provide: MULTI_CONFIG, useValue: 'http://localhost:4200', multi: true },
    { provide: MULTI_CONFIG, useValue: 'http://onet.pl/api', multi: true },
    AuthGuardService,
  ],
})
export class CoreModule {}
