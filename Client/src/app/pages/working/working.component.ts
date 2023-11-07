import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkingComponent {

}
