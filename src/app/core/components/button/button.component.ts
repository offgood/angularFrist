import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  icon: string = '';
  buttonText: string = '';
  onclick(v: string) {
    console.log(v);
    console.log('click Hi !!');
  }
}
