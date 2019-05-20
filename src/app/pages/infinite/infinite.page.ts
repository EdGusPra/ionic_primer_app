import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
data: any[] = Array(20);
@ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll ;
  constructor() { }

  ngOnInit() {
  }
  loadData(e){

    console.log('cargando siguiente');
    setTimeout(() => {
      if(this.data.length > 50) {
        e.target.complete();
        this.infinite.disabled = true;
        return false;
      }
      const newArr = Array(20);
      this.data.push(...newArr);
      e.target.complete();
    }, 1000);
    
  }
}
