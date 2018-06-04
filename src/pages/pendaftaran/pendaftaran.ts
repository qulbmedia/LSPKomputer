import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the PendaftaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pendaftaran',
  templateUrl: 'pendaftaran.html'
})

export class PendaftaranPage {

	step: string = "step1";
	isAndroid: boolean = false;

  constructor(platform: Platform) {

  	this.isAndroid = platform.is('android');

  }

}
