import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { PendaftaranPage } from '../pages/pendaftaran/pendaftaran';
import { FaqPage } from '../pages/faq/faq';
import { SertifikatPage } from '../pages/sertifikat/sertifikat';
import { AsesorPage } from '../pages/asesor/asesor';
import { SkemaPage } from '../pages/skema/skema';
import { KepuasanPage } from '../pages/kepuasan/kepuasan';
import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccordionComponent } from '../components/accordion/accordion';
/* import { ExpandableComponent } from '../components/expandable/expandable'; */

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PendaftaranPage,
    FaqPage,
    SertifikatPage,
    AccordionComponent,
    AsesorPage,
    SkemaPage,
    KepuasanPage,
    SettingPage,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PendaftaranPage,
    FaqPage,
    SertifikatPage,
    AsesorPage,
    SkemaPage,
    KepuasanPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
