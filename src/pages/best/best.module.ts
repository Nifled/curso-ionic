import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestPage } from './best';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BestPage,
  ],
  imports: [
    IonicPageModule.forChild(BestPage),
    PipesModule
  ],
})
export class BestPageModule {}
