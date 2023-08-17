import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MfeHomeComponent } from './mfe-home/mfe-home.component';
import { MfeFragmentComponent } from './mfe-fragment/mfe-fragment.component';

export const remoteRoutes: Route[] = [
  { path: '', component: MfeHomeComponent }, // Add route
];
@NgModule({
  declarations: [MfeHomeComponent, MfeFragmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes), // forChild
  ],
})
export class RemoteMfeModule {}
