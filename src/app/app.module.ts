import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './commom/sidebar-nav/sidebar-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatNavigationComponent } from './chat/chat-navigation/chat-navigation.component';
import { ChatBodyComponent } from './chat/chat-body/chat-body.component';
import { ChatThreadsComponent } from './chat/chat-threads/chat-threads.component';
import { ChatUserInfoComponent } from './chat/chat-user-info/chat-user-info.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatMainComponent } from './chat/chat-main/chat-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    ChatNavigationComponent,
    ChatBodyComponent,
    ChatThreadsComponent,
    ChatUserInfoComponent,
    CalendarComponent,
    NotificationsComponent,
    ChatMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
