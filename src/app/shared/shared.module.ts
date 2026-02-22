import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollUpBtnComponent } from './components/buttons/scroll-up-btn/scroll-up-btn.component';



@NgModule({
  declarations: [ScrollUpBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [ScrollUpBtnComponent]
})
export class SharedModule { }
