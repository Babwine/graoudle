import { LgAura } from "../static/lg-aura.static";
import { LgEffect } from "../static/lg-effect.static";
import { LgTeam } from "../static/lg-team.static";

export class LgRole {
    name!: string;
    team!: LgTeam;
    aura!: LgAura;
    effects!: LgEffect[];
    commands!: boolean;
    items!: boolean;
    color!: string;

    constructor(
        name: string, 
        team: LgTeam, 
        aura: LgAura, 
        effects: LgEffect[], 
        color: string, 
        commands: boolean, 
        items: boolean) 
    {
        this.name = name;
        this.team = team;
        this.aura = aura;
        this.effects = effects;
        this.color = color;
        this.commands = commands;
        this.items = items;
    }

    addEffect(effect: LgEffect) {
        this.effects.push(effect);
    }

    removeEffect(effect: LgEffect) {
        let result: LgEffect[] = [];
        for (let eff of this.effects) {
            if (eff !== effect) {
                result.push(eff);
            } else {
            }
        }
        this.effects = result;
    }
}