import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Challenge } from "./challenge/challenge";
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Challenge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('typingchallenge');
}
