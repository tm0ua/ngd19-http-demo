import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameService } from './services/name.service';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  declarations: [],
  providers: [NameService]
})
export class CoreModule { }