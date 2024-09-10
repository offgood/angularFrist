import {
  AfterContentChecked, // Called after the content (ng-content) has been checked
  AfterContentInit, // Called after the content (ng-content) has been initialized
  AfterViewChecked, // Called after the component's view has been checked
  AfterViewInit, // Called after the component's view has been initialized
  Component,
  DoCheck, // Custom change detection hook, called when Angular checks for changes
  OnChanges, // Called when input properties are changed
  OnDestroy, // Called just before the component is destroyed
  OnInit, // Called once after the component is initialized
} from '@angular/core';

@Component({
  selector: 'app-page1', // The tag you use to place this component in HTML
  standalone: true, // This component can stand alone without being part of a module
  imports: [], // Here you import other components, directives, or pipes
  templateUrl: './page1.component.html', // Points to the HTML file for this component
  styleUrl: './page1.component.scss', // Points to the SCSS file for this component
}) // Implements lifecycle hooks to react to input property changes // Implements initialization logic // Custom change detection logic // Implements content initialization logic // Implements post content-check logic // Implements view initialization logic // Implements post view-check logic // Implements cleanup logic before component destruction
export class Page1Component
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  counter = 0; // A counter variable to track increments and decrements
  name = ''; // A name variable, currently unused

  constructor() {
    // This is called when the component is first created, before anything is rendered
    console.log(`constructor - counter is ${this.counter}`);
  }

  ngOnChanges() {
    // Called when any data-bound property (like an @Input property) changes
    console.log(`ngOnChanges - counter is ${this.counter}`);
  }

  ngOnInit() {
    // Called once, after the first `ngOnChanges` and before the view is fully rendered
    console.log(history.state); //get handle data
    console.log(`ngOnInit  - counter is ${this.counter}`);
  }

  ngDoCheck() {
    // Custom change detection logic, can be used for fine-tuned checks
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // Called after the content (projected inside <ng-content>) has been initialized
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // Called after every check of the content (projected inside <ng-content>)
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // Called after the component's view (and child views) has been fully initialized
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // Called after every check of the component's view
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // Called right before Angular destroys the component, used for cleanup (e.g., unsubscribing from Observables)
    console.log('ngOnDestroy');
  }

  increase() {
    // Increases the counter value by 1
    this.counter++;
  }

  decrease() {
    // Decreases the counter value by 1
    this.counter--;
  }
}
