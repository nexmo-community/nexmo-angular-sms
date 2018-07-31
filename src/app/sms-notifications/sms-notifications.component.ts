import { Component, OnInit } from '@angular/core';
import * as Ably from 'ably';

@Component({
  selector: 'app-sms-notifications',
  templateUrl: './sms-notifications.component.html',
  styleUrls: ['./sms-notifications.component.css']
})
export class SmsNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let options: Ably.Types.ClientOptions = { key: 'ABLY_KEY' };
    let client = new Ably.Realtime(options);
    let channel = client.channels.get('sms-notification');

    channel.subscribe('new-sms', data => {
      this.smsNotifications.push(data.data);
    });
  }

  smsNotifications: Object[] = [];

}
