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
      redirecto: '/action-sheet'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirecto: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirecto: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirecto: '/card'
    },

    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirecto: '/check'
    },
    {
      icon: 'calendar',
      name: 'Datetime',
      redirecto: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirecto: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grids - rows',
      redirecto: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite scroll',
      redirecto: '/infinite'
    },
    {
      icon: 'hammer',
      name: 'Inputs Forms',
      redirecto: '/input'
    },
    {
      icon: 'list',
      name: 'Listas - sliding',
      redirecto: '/list'
    },
    {
      icon: 'reorder',
      name: 'Listas - reorder',
      redirecto: '/list-reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirecto: '/loading'
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
