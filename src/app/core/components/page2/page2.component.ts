import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
})
export class Page2Component {
  passedData: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.passedData = params['id']; // 'id' is the name of the route param
    });
    console.log(this.passedData);
  }
}
