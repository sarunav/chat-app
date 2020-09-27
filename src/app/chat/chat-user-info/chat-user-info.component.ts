import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-user-info',
  templateUrl: './chat-user-info.component.html',
  styleUrls: ['./chat-user-info.component.scss']
})
export class ChatUserInfoComponent implements OnInit {
  current = 0;
  public activeIndex: number;
  status = false;
  accordionData = [
    { headerIcon: 'fa-star-o', title: 'Starred Messages', class: 'starred', contents: [
    ] },
    { headerIcon: 'fa-picture-o', title: 'Media', class: 'media', contents: [
    ] },
    { headerIcon: 'fa-file-code-o', title: 'Files & Docs', class: 'files', contents: [
      { icon: 'fa-file-archive-o', text: 'MockUpdesign.zip', downloadIcon: 'fa-download', class: 'zip' },
      { icon: 'fa-file-text-o', text: 'Feedback.docx', downloadIcon: 'fa-download', class: 'docs' }
    ] },
    { headerIcon: 'fa-exclamation-triangle', title: 'Information', class: 'information', contents: [] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

// Get selected accordion index
  selectAccordion(i: any, e: any): void {
    console.log('h--', i);
    this.activeIndex = i;
    this.status = !status;
  }

}
