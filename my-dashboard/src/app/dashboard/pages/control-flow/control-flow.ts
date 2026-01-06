import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
})
export default class ControlFlow {
  public showContent=signal(false);

  toggleContent() {
    this.showContent.update(value => !value);
  }
}
