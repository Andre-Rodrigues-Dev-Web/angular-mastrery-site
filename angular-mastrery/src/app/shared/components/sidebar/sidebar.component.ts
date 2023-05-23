import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  links = [
    { label: 'Home', route: '/home' },
    { label: 'Página 2', route: '/pagina2' },
    { label: 'Página 3', route: '/pagina3' }
  ];
}
