import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsesorPage } from '../asesor/asesor';
import { SkemaPage } from '../skema/skema';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openAsesorPage() {

  	this.navCtrl.push(AsesorPage);

  }

  openSkemaPage() {

  	this.navCtrl.push(SkemaPage);

  }

}
