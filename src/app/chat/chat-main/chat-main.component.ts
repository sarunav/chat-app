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
  activateClass = true;
  itemsProcessed: number;

  constructor() { }

  ngOnInit(): void {
  }


  // Check selected tab index
  selectPill(i: number, e: any): void {
    this.activateClass = false;
    this.activePillIndex = i;
    this.addActiveClass(i);
  }

  // Add class for previous and next tab elements for active UI
  addActiveClass(i: number): void {
      const allElements = document.querySelectorAll('.nav-pills a');
      const currentIndex = i;
      const totalElemets = allElements.length;

      const chatTopWrapper = document.querySelector('.chat-navigation-top-wrapper');
      console.log('current-index',  currentIndex);

      this.itemsProcessed = 0;

      allElements.forEach((item) => {
            item.classList.remove('prev-class');
            item.classList.remove('next-class');
            chatTopWrapper.classList.remove('prev-class');

            this.itemsProcessed++;

            // Checks if the loop has iterated through all the elements
            if (this.itemsProcessed === allElements.length) {
              if (currentIndex === 0) {
                // Check if the clicked element is first tab
                chatTopWrapper.classList.add('prev-class');
                allElements[i + 1].classList.add('next-class');
               } else if (currentIndex === totalElemets - 1) {
                 // Check if the clicked element is last tab
                allElements[totalElemets - 2].classList.add('prev-class');
                } else {
                  // Check if the clicked element is in-between first & last tab
                    allElements[i - 1].classList.add('prev-class');
                    allElements[i + 1].classList.add('next-class');
                }
            }
        });

  }

}
