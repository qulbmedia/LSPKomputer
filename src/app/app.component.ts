import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PendaftaranPage } from '../pages/pendaftaran/pendaftaran';
import { FaqPage } from '../pages/faq/faq';
import { SertifikatPage } from '../pages/sertifikat/sertifikat';
import { AsesorPage } from '../pages/asesor/asesor';
import { SkemaPage } from '../pages/skema/skema';
import { KepuasanPage } from '../pages/kepuasan/kepuasan';
import { SettingPage } from '../pages/setting/setting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Pendaftaran', component: PendaftaranPage },
      { title: 'Cek Sertifikat', component: SertifikatPage },
      { title: 'Data Asesor', component: AsesorPage },
      { title: 'Skema Sertifikasi', component: SkemaPage },
      { title: 'Bantuan', component: FaqPage },
      { title: 'Kepuasan Pelanggan', component: KepuasanPage },
      { title: 'Setting', component: SettingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
