import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  title = 'Morse App';
  messages: any[];
  messagesPaged: Observable<any[]>;
  latest: any;
  message = '';
  humanReadableMessage = '';
  time: number;

  constructor(private messageService: MessageService) {
    this.messageService.getMessagesLastByLimit(6).subscribe(messages => {
      this.messages = messages;
      this.latest = messages[0];
    });
  }

  ngOnInit() {
  }
  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }
}
