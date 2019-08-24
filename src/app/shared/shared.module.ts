import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';
import { FadingHeaderDirective } from './../directives/fading-header.directive';

@NgModule({
  declarations: [
    HideHeaderDirective,
    FadingHeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideHeaderDirective,
    FadingHeaderDirective,
  ]
})
export class SharedModule { }
