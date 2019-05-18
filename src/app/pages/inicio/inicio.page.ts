import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente[] = [
    {
      icon: 'american-football',
      name: 'Alert',
      redirecto: '/alert'
    },
    {
      icon: 'appstore',
      name: 'Action sheet',
      redirecto: '/sheet'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}

interface componente {
icon: string;
name: string;
redirecto: string;
}
