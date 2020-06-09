import { Component } from '@angular/core';
import faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  content = '';

  // getRandomText() {
  //   let letters =
  //     'abcde fgh ijkl mn pqrstu vwxyz ABCDE FGHIJK LMN PQR STU WXYZ';
  //   let len = 20;
  //   let randomText = '';
  //   while (len > 0) {
  //     let i = Math.floor(Math.random() * letters.length);
  //     console.log('i', i);
  //     randomText += letters[i];
  //     console.log('randomText', randomText);
  //     len--;
  //   }
  //   this.text = randomText;
  //   return randomText;
  // }

  handleChange = (e: any) => {
    e.preventDefault();
    this.content = e.target.value;
    // for(let i=0;i<e.target.value.length;i++){
    //   if(this.randomText[i]!==this.content[i]){

    //   }
    // }
    console.log('this.content', this.content);
  };

  compare(c1: string, c2: string) {
    console.log('c2', c2);
    if (c2 === undefined) {
      return 'black';
    }
    return c1 === c2 ? 'green' : 'red';
  }
}
