import { MaterialModule } from './../material/material.module';
import { CampRoutingModule } from './routes/camp.routing.module';
import { SearchPage } from './pages/search/search.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    CommonModule,
    CampRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class CampModule { }
