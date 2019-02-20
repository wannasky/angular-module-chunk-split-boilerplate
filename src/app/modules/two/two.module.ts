import {NgModule} from '@angular/core';
import {TwoComponent} from './two.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TwoComponent],
  imports: [
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: TwoComponent}
    ])
  ],
  exports: [TwoComponent]
})
export class TwoModule {

}
