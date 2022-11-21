import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    { name: 'ivan' }, { name: 'pecko' }
  ]

  constructor(
    @Inject('Test') test: string
  ) {
    console.log(test);

  }

  addUserHandler(nameInput: HTMLInputElement): void {
    const { value: name } = nameInput
    this.users.push({ name })
    nameInput.value = ''
  }


}
