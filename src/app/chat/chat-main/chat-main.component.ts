import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {
  items = [
    { name: 'Karlyn Carabello', img: '1.jpg', time: '25 mins ago' },
    { name: 'Junior Sabine', img: '2.jpg', time: 'An hour ago' },
    { name: 'Melonia Sherk', img: '3.jpg', time: '3 hours ago' },
    { name: 'Harrison Palmatier', img: '5.jpg', time: '7 hours ago' },
    { name: 'Tressa Duhart', img: '4.jpg', time: '10 hours ago' },
    { name: 'Erick Spiva', img: '6.jpg', time: '13 hours ago' },
    { name: 'Josefina Simpson', img: '7.jpg', time: 'Yesterday' },
  ];
  public activePillIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectPill(i: number) {
    console.log('selected--', i);
    this.activePillIndex = i;
  }

}
