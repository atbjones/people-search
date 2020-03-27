import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ButtonModule, InputModule, FormFieldModule } from '@healthcatalyst/cashmere';



@NgModule({
  exports: [ButtonModule, InputModule, FormFieldModule ]
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class CashmereModule { }
