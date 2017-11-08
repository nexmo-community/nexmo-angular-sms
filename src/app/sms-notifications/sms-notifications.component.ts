import { Component, OnInit } from '@angular/core';
import * as Pusher from 'pusher-js';

@Component({
  selector: 'app-sms-notifications',
  templateUrl: './sms-notifications.component.html',
  styleUrls: ['./sms-notifications.component.css']
})
export class SmsNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var pusher = new Pusher('PUSHER_APP_KEY', {
      cluster: 'eu',
      encrypted: true
    });

    var channel = pusher.subscribe('sms-notification');
    channel.bind('new-sms', data => {
      this.smsNotifications.push(data.data);
    });
  }

  smsNotifications: Object[] = [];

}
