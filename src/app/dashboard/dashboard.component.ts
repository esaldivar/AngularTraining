import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { ServerTrafficComponent } from './server-traffic/server-traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [ServerStatusComponent, ServerTrafficComponent, SupportTicketsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
