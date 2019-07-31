import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './name/name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NameComponent],
  exports: [NameComponent]
})
export class SharedModule { }