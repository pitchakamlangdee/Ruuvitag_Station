import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SensorsApiProvider } from '../../providers/sensors-api/sensors-api';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  sensors: any;
  constructor(public navCtrl: NavController, public sensorsApiProvider: SensorsApiProvider) {
    this.getSensors();

  }
  getSensors() {
    this.sensorsApiProvider.getSensors()
    .then(data => {
      this.sensors = data;
      console.log(this.sensors);
    });
  }
}
