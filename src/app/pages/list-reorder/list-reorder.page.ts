import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
personajes = [ 'Aquaman', 'Mujer maravilla', 'Superman', 'Batman', 'Flash'];
  constructor() { }

  ngOnInit() {
  }
  reOrder(e) {
    console.log(e);
    const itemMover = this.personajes.splice(e.detail.from, 1)[0];
    this.personajes.splice(e.detail.to, 0, itemMover);
    e.detail.complete();
  }

  onClick() {
    console.log(this.personajes);
  }
}
