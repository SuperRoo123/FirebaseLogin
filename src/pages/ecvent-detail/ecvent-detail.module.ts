import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcventDetailPage } from './ecvent-detail';

@NgModule({
  declarations: [
    EcventDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EcventDetailPage),
  ],
})
export class EcventDetailPageModule {}
