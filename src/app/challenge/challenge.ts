import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-challenge',
  imports: [],
  templateUrl: './challenge.html',
  styleUrl: './challenge.css',
})
export class Challenge {
  protected readonly prompt: string = faker.lorem.sentence();
  correctInput: string = '';
  incorrectInput: string = '';
  unmatchedInput: string = this.prompt;

  updateDisplay() {
    
  }
}
