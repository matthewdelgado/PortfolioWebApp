import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface menuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: menuItem[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Experience', route: '/experience' },
    { name: 'Education', route: '/education' },
    { name: 'Skills', route: '/skills' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' }
  ];

  constructor(
    private router: Router
  ) {

  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
