import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularPage } from './popular';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PopularPage,
  ],
  imports: [
    IonicPageModule.forChild(PopularPage),
    PipesModule
  ],
})
export class PopularPageModule {}
