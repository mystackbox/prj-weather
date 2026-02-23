import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollUpBtnComponent } from './components/buttons/scroll-up-btn/scroll-up-btn.component';
import { ShareBtnComponent } from './components/buttons/share-btn/share-btn.component';

@NgModule({
  declarations: [ScrollUpBtnComponent, ShareBtnComponent],
  imports: [CommonModule],
  exports: [ScrollUpBtnComponent, ShareBtnComponent],
})
export class SharedModule {}
