import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './commom/sidebar-nav/sidebar-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatUserInfoComponent } from './chat/chat-user-info/chat-user-info.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatMainComponent } from './chat/chat-main/chat-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    ChatUserInfoComponent,
    CalendarComponent,
    NotificationsComponent,
    ChatMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
