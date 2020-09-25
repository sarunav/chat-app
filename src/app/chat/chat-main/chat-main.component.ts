import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {
  items = [
    { name: 'Karlyn Carabello', img: '', time: '25 mins ago' },
    { name: 'Junior Sabine', img: '', time: 'An hour ago' },
    { name: 'Melonia Sherk', img: '', time: '3 hours ago' },
    { name: 'Harrison Palmatier', img: '', time: '7 hours ago' },
    { name: 'Tressa Duhart', img: '', time: '10 hours ago' },
    { name: 'Erick Spiva', img: '', time: '13 hours ago' },
    { name: 'Josefina Simpson', img: '', time: 'Yesterday' },
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
