import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatMainComponent } from './chat/chat-main/chat-main.component';


export const routes: Routes = [
  { path: '', component: ChatMainComponent },
  { path: 'calendar', component: CalendarComponent, pathMatch: 'full' },
  { path: 'notifications', component: NotificationsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }