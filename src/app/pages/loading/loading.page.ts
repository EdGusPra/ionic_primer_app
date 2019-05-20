import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
load: any;
  constructor(private loading: LoadingController) { }

  ngOnInit() {

  this.presentLoading('Espere por favor');
  setTimeout(() => {
    this.load.dismiss();
  }, 1500);
  }

  async presentLoading(message: string) {
    this.load = await this.loading.create({
      message
    });
    await this.load.present();


  }
}
