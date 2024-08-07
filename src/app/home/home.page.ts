import { Component } from '@angular/core';
import { AlertController, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to do this?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          htmlAttributes: {
            'aria-label': 'No way dude',
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          htmlAttributes: {
            'aria-label': 'You bet',
          },
        },
      ],
    });
    await alert.present();
  }
}
