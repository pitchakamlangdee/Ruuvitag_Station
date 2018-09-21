import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SensorsApiProvider } from '../../providers/sensors-api/sensors-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sensors_last: any;
  constructor(public navCtrl: NavController, public sensorsApiProvider: SensorsApiProvider) {
    this.getLastSensors();

  }
  getLastSensors() {
    this.sensorsApiProvider.getLastSensors()
    .then(data_last => {
      this.sensors_last = data_last;
      console.log(this.sensors_last);
    });
  }
}
