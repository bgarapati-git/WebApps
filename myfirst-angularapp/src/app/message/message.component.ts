import { Component } from '@angular/core';


@Component({
    selector: 'message-component',
    templateUrl: './message.component.html'
})
export class MessageComponent{
    message = 'Here is the message';

    constructor() { }

    ngOnInit() {
  }
}