import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-challenge',
  imports: [CommonModule],
  templateUrl: './challenge.html',
  styleUrl: './challenge.css',
})
export class Challenge {
  protected readonly prompt: string = faker.lorem.sentence();
  correctInput: string[] = new Array(this.prompt.length).fill('_');
  incorrectInput: string[] = new Array(this.prompt.length).fill('_');
  unmatchedInput: string[] = this.prompt.split('');
  correctInputDisplay: string = '';
  incorrectInputDisplay: string = '';
  unmatchedInputDisplay: string = this.prompt;
  solved: boolean = false;

  updateDisplay(input: string): void {
    console.log(this.prompt);
    this.correctInput = new Array(this.prompt.length).fill('_');
    this.incorrectInput = new Array(this.prompt.length).fill('_');
    this.unmatchedInput = this.prompt.split('');
    for (let i = 0; i < input.length; i++) {
      if (input[i] === this.prompt[i]) {
        this.correctInput[i] = this.prompt[i];
        this.incorrectInput[i] = '_';
      } else {
        this.correctInput[i] = '_';
        this.incorrectInput[i] = this.prompt[i];
      }
      this.unmatchedInput[i] = '_';
    }
    this.correctInputDisplay = this.correctInput.join('');
    this.incorrectInputDisplay = this.incorrectInput.join('');
    this.unmatchedInputDisplay = this.unmatchedInput.join('');
    if (this.correctInputDisplay === this.prompt) {
      alert('Congratulations! You have completed the challenge.');
      this.solved = true;
    }
  }
}