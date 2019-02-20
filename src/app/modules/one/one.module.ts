import {NgModule} from '@angular/core';
import {OneComponent} from './one.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [OneComponent],
  imports: [
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: OneComponent},
      {path: 'child', loadChildren: './child/child.module#OneChildModule'}
    ])
  ],
  exports: [OneComponent]
})
export class OneModule {

}
