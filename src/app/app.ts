import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appointment } from './components/appointment/appointment';

@Component({
  imports: [RouterOutlet, Appointment],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FrontAppointment');

}
