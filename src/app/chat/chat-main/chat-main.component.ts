import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {
  items = [
    { name: 'Karlyn Carabello', img: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg', time: '25 mins ago' },
    { name: 'Junior Sabine', img: 'https://randomuser.me/api/portraits/women/65.jpg', time: 'An hour ago' },
    { name: 'Melonia Sherk', img: 'https://randomuser.me/api/portraits/women/17.jpg', time: '3 hours ago' },
    { name: 'Harrison Palmatier', img: 'https://randomuser.me/api/portraits/men/61.jpg', time: '7 hours ago' },
    { name: 'Tressa Duhart', img: 'https://randomuser.me/api/portraits/women/26.jpg', time: '10 hours ago' },
    { name: 'Erick Spiva', img: 'https://uifaces.co/our-content/donated/N5PLzyan.jpg', time: '13 hours ago' },
    { name: 'Josefina Simpson', img: 'https://randomuser.me/api/portraits/women/21.jpg', time: 'Yesterday' },
    { name: 'Natasha kirpalani', img: 'https://randomuser.me/api/portraits/women/76.jpg', time: 'Yesterday' },
  ];
  public activePillIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }


  // Checking selected tab index
  selectPill(i: number, e: any): void {
    console.log('selected--', i);
    this.activePillIndex = i;
    this.addActiveClass(i, e);
  }

  // Add class for previous and next tab elements for active UI
  addActiveClass(i: any, e: any): void {
      const currentEl = e.target;
      const currentIndex = currentEl.dataset.index;
      const allElements = document.querySelectorAll('.nav-pills a');
      const totalElemets = allElements.length;
      console.log('totalElemets',  e);

      allElements.forEach((item) => {
            item.classList.remove('prev');
            item.classList.remove('next');
        });
      if (currentIndex == '0') {
          console.log('user has clicked first chat element');
      }
      else if (currentIndex == totalElemets - 1) {
          console.log('user has clicked last chat element');
      }
      else {
          console.log("user has clicked an element in between first and last elements");
          // const previousEl = allElements[currentIndex - 1];
          // const nextEl = allElements[parseInt(currentIndex) + 1];
          // console.log('previousEl', previousEl);
          // console.log('nextEl', nextEl);
          // previousEl.classList.add('prev');
          // nextEl.classList.add('next');
      }
      // console.log(currentEl, currentIndex);

  }

}
