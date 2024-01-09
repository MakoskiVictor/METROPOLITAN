import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimatedButtonComponent {
  @Output() openSidebar = new EventEmitter();

  sendBoolean() {
    this.openSidebar.emit()
  }

}
