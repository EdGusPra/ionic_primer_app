import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
 datosNaci: Date = new Date();
 customPicker;
 custom: Date;
 
  constructor() { }

  ngOnInit() {
    this.customPicker = {
      buttons: [{
        text: 'Guardar',
        handler: (e) => {
          console.log('Clicked Save!');
          console.log(e);
          this.custom = new Date(e.year.value  - e.month.value - e.day.value) ;
      }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]
    }
  
  }
  cambioFecha(e) {
    this.datosNaci = new Date(e.detail.value) ;
  }
}
