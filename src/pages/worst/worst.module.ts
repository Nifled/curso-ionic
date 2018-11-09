import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorstPage } from './worst';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    WorstPage,
  ],
  imports: [
    IonicPageModule.forChild(WorstPage),
    PipesModule
  ],
})
export class WorstPageModule {}
