import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header', // tag use in html file in exit file to import this
  standalone: true, // unkown
  imports: [CommonModule, RouterLink], // is short import function import other component use in this components
  templateUrl: './header.component.html', // ui in componet
  styleUrl: './header.component.scss', // style use in component
})
export class HeaderComponent {
  menu: string[] = ['Home', 'Item1', 'Item2', 'Item3', 'Item4']; // ready to use in html inline ng is not set var const ...
  dataToPass = 'example-data'; // Data you want to pass

  constructor(private router: Router) {}
  passDataToB() {
    this.router.navigate(['page1'], {
      state: {
        description: 'You are in needed in b',
        Label: 'B',
      },
    });
  }
}
