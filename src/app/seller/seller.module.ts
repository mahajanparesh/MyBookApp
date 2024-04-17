import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerComponent } from './seller.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SellerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SellerComponent }]),
  ],
})
export class SellerModule {}
