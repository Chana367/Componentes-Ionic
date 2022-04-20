import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta!!!!!',
      subHeader: 'Lea atentamente ',
      message: 'Esto es un mensaje de alerta.',
      buttons: ['Cancelar', 'Abrir Modal', 'Eliminar']
    });

    await alert.present();
  }

}
