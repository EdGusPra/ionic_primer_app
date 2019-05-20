import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
usuarios: Observable<any>;
@ViewChild('lista')lista: IonList;
  constructor(private dataServise: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataServise.getUsers();
  }
you(user){
  console.log(user);
this.lista.closeSlidingItems();
}

face(user){
console.log(user);
this.lista.closeSlidingItems();
}
}
