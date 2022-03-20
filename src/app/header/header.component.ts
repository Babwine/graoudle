import { Component, OnInit } from '@angular/core';
import { LgRole } from '../models/lg-role.model';
import { LgRoles } from '../static/lg-role.static';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  popup!:boolean;
  popup2!: boolean;
  roles!: LgRole[];

  constructor() {
    this.popup = false;
    this.popup2 = false;
    this.roles = LgRoles.LISTE_ALL_ROLES;
   }

  ngOnInit(): void {
  }


}
