import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MfeHomeComponent } from './mfe-home/mfe-home.component';

export const remoteRoutes: Route[] = [
  { path: '', component: MfeHomeComponent }, // Add route
];
@NgModule({
  declarations: [MfeHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes), // forChild
  ],
})
export class RemoteMfeModule {}
