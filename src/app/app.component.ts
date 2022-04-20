import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private menu: MenuController) {}
  ngOnInit() {
    this.menu;
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  no_mostrar(){
    this.menu.close();
  }
}
