import { Component, OnInit } from '@angular/core';
import { LgRoles } from '../static/lg-role.static';

@Component({
  selector: 'app-lg-composition',
  templateUrl: './lg-composition.component.html',
  styleUrls: ['./lg-composition.component.scss']
})
export class LgCompositionComponent implements OnInit {
  public compo = LgRoles.LISTE_ALL_ROLES;

  constructor() { }

  ngOnInit(): void {
  }

}
