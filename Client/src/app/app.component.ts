import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'METROPOLITAN', content: 'CLUB METROPOLITAN' })
  }


  title = 'Client';
}
