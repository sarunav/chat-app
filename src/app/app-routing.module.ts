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
//   { path: 'auth', loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule) },
//   { path: 'user', loadChildren: () => import(`./user/user.module`).then(m => m.UserModule), canActivate: [AuthGuard]  },
//   { path: 'tank', loadChildren: () => import('./tank/tank.module').then(m => m.TankModule), canActivate: [AuthGuard] },
//   { path: '', loadChildren: () => import('./common/commonRoute.module').then(m => m.CommonRouteModule) },
//   { path: '**', component: HomeComponent },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
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