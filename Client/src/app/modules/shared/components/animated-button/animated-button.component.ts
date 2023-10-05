import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss']
})
export class AnimatedButtonComponent {
  @Output() openSidebar = new EventEmitter();

  sendBoolean() {
    this.openSidebar.emit()
  }

}
