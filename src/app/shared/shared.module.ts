import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { SharedDirectiveDirective } from './shared-directive.directive';
import { SharedPipePipe } from './shared-pipe.pipe';
import { CustomCurrencyFormatPipe } from './currency-format.pipe';

@NgModule({
  declarations: [
    SharedComponentComponent,
    SharedDirectiveDirective,
    SharedPipePipe,
    CustomCurrencyFormatPipe,
  ],
  imports: [CommonModule],
  exports: [
    SharedComponentComponent,
    SharedDirectiveDirective,
    SharedPipePipe,
    CustomCurrencyFormatPipe,
  ],
})
export class SharedModule {}
