import {NgModule} from '@angular/core';
import {OneChildComponent} from './child.component';

@NgModule({
  declarations: [OneChildComponent],
  exports: [OneChildComponent]
})
export class OneChildModule {

}
