import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  animations: [
    trigger('fade', [

      state( 'void', style ({ opacity : 0 })),

      transition('void => *', [
        animate( 3000 )
      ])
    ])
  ]
})



export class BsNavbarComponent{

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


}
