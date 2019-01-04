import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarComponent } from './agregar';

@NgModule({
  declarations: [
    AgregarComponent,
  ],
  imports: [
    IonicPageModule.forChild(AgregarComponent),
  ],
})
export class AgregarPageModule {}
