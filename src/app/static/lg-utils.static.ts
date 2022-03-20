import { LgAura } from "./lg-aura.static";
import { LgEffect } from "./lg-effect.static";
import { LgTeam } from "./lg-team.static";

export class LgUtils {
    
    static arrayEquals(a: Array<any>, b: Array<any>) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    static translateColor(text: string): string {
        switch (text) {
            case "X":
            return '#A53133';
            break;
            case "~":
            return 'goldenrod';
            break;
            case "O":
            return '#48A548';
            break;
            default:
            return 'gray';
        }
    }

    static translateEffects(effects: LgEffect[]): string {
        if (effects.length === 0) {
            return "";
        } else {
            let results = "";
            for (let effect of effects) {
                results += "<img src='assets/images/" + effect + ".png' alt='" + effect + "'/>";
            }
            return results;
        }
    }

    static translateTeam(team: LgTeam): string {
        return "<img src='assets/images/" + team + ".png' alt='" + team + "'/>";
    }

    static translateAura(aura: LgAura): string {
        return "<img src='assets/images/" + aura + ".png' alt='" + aura + "'/>";
    }

    static translateCommands(commands: boolean): string {
        return "<img src='assets/images/" + (commands ? 'OUI' : 'NON') + ".png' alt='" + (commands ? 'OUI' : 'NON') + "'/>";
    }

    static translateItems(items: boolean): string {
        return "<img src='assets/images/" + (items ? 'OUI' : 'NON') + ".png' alt='" + (items ? 'OUI' : 'NON') + "'/>";
    }

    static getRandomColor(): String {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return '#' + randomColor;
    }
}