import { Component, Input, OnInit, ɵnoSideEffects } from '@angular/core';
import { throwError } from 'rxjs';
import { LgRoleCheck } from '../models/lg-role-check.model';
import { LgRole } from '../models/lg-role.model';
import { LgRoles } from '../static/lg-role.static';
import { TimeCycle } from '../static/lg-time-cycle.static';
import { LgUtils } from '../static/lg-utils.static';

@Component({
  selector: 'app-guess-grid',
  templateUrl: './guess-grid.component.html',
  styleUrls: ['./guess-grid.component.scss']
})
export class GuessGridComponent implements OnInit {
  public guessables!: LgRole[];
  public guessedName!: string;
  public guessedMapList!: Map<String, any>[];
  public guessedInfosMap!: Map<String, LgRole>;
  public toGuess!: LgRole;
  public roleExists!: boolean;

  public time!: TimeCycle;

  public found!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.guessables = LgRoles.LISTE_ALL_ROLES;
    let rand = Math.floor(Math.random() * (Math.floor(this.guessables.length) - Math.ceil(0))) + Math.ceil(0);
    this.toGuess = this.guessables[rand];
    this.guessedMapList = [];
    this.guessedInfosMap = new Map();
    this.found = false;
    this.roleExists = true;
    this.time = TimeCycle.DAY;
  }

  onKey(box: any) {
    let theGuessed = box.value;
    let exists = false;
    for (let guessable of this.guessables) {
      if (guessable.name.toUpperCase() === theGuessed.toUpperCase()) {
        this.roleExists = true;
        this.guessedName = theGuessed;
        this.pickGuess(guessable);
        exists = true;
        box.value = "";
      } 
      this.roleExists = exists;
    }
  }

  pickGuess(role: LgRole) {
    let guessedMap = new Map();
    guessedMap.set('name', new LgRoleCheck(role.name, role.name));
    guessedMap.set('team', new LgRoleCheck(LgUtils.translateTeam(role.team), role.team === this.toGuess.team));
    guessedMap.set('aura', new LgRoleCheck(LgUtils.translateAura(role.aura), role.aura === this.toGuess.aura));
    guessedMap.set('commands', new LgRoleCheck(LgUtils.translateCommands(role.commands),role.commands === this.toGuess.commands));
    guessedMap.set('items', new LgRoleCheck(LgUtils.translateItems(role.items),role.items === this.toGuess.items));
    guessedMap.set('color', new LgRoleCheck(role.color,role.color));
    guessedMap.set('time', new LgRoleCheck(this.time,this.time));
    
    let effectExists = false;
    for (let effect of this.toGuess.effects) {
      if (role.effects.includes(effect)) {
        effectExists = true;
      }
    }
    guessedMap.set('effects', new LgRoleCheck(LgUtils.translateEffects(role.effects),(LgUtils.arrayEquals(role.effects, this.toGuess.effects) ? 'O' : (effectExists ? "~" : "X"))));
    

    this.guessedMapList.push(guessedMap);

    this.guessedInfosMap.set(role.name, role);

    if (this.toGuess === role) {
      this.found = true;
    }

    this.manageTimeCycle();
    
  }

  translateColor(text: string): string {
    return LgUtils.translateColor(text);
  }


  manageTimeCycle() {
    let isToGuess = false;
    if (this.time === TimeCycle.DAY) {
      for (let theRole of this.guessables) {
        if (theRole === this.toGuess) {
          isToGuess = true;
        } else {
          isToGuess = false;
        }

        let effsJour = LgRoles.MAP_ROLES_EFFETS_JOUR.get(theRole);
        if (effsJour)
        for (let effJ of effsJour) {
          theRole.removeEffect(effJ);
        }
        let effsNuit = LgRoles.MAP_ROLES_EFFETS_NUIT.get(theRole);
        if (effsNuit)
        for (let effN of effsNuit) {
          theRole.addEffect(effN);
        }
        if (isToGuess) this.toGuess = theRole; 
      }
      this.time = TimeCycle.NIGHT;
    } else {
      for (let theRole of this.guessables) {
        if (theRole === this.toGuess) {
          isToGuess = true;
        } else {
          isToGuess = false;
        }


        let effsJour = LgRoles.MAP_ROLES_EFFETS_JOUR.get(theRole);
        if (effsJour)
        for (let effJ of effsJour) {
          theRole.addEffect(effJ);
        }
        let effsNuit = LgRoles.MAP_ROLES_EFFETS_NUIT.get(theRole);
        if (effsNuit)
        for (let effN of effsNuit) {
          theRole.removeEffect(effN);
        }
        if (isToGuess) this.toGuess = theRole; 
      }
      this.time = TimeCycle.DAY;
    }
  }
}
