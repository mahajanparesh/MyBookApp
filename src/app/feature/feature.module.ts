import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponentComponent } from './feature-component/feature-component.component';
import { FeatureDirectiveDirective } from './feature-directive.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeatureComponentComponent, FeatureDirectiveDirective],
  imports: [CommonModule, SharedModule],
  exports: [FeatureComponentComponent, FeatureDirectiveDirective],
})
export class FeatureModule {}
