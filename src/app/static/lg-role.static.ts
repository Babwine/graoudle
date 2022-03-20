import { LgRole } from "../models/lg-role.model";
import { LgAura } from "./lg-aura.static";
import { LgEffect } from "./lg-effect.static";
import { LgTeam } from "./lg-team.static";

export class LgRoles {
    public static LOUP_GAROU                = new LgRole('Loup-Garou', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#7F0000", false, false);
    public static INFECT_PERE_DES_LOUPS     = new LgRole('Infect Père des Loups', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#650000", true, true);
    public static LOUP_GAROU_FEUTRE         = new LgRole('Loup-Garou Feutré', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#633A35", false, false);
    public static LOUP_GAROU_PERFIDE        = new LgRole('Loup-Garou Perfide', LgTeam.LOUPS_GAROUS, LgAura.NEUTRE, [LgEffect.NIGHT_VISION], "#350E0E", false, false);
    public static LOUP_GAROU_MYSTIQUE       = new LgRole('Loup-Garou Mystique', LgTeam.LOUPS_GAROUS, LgAura.LUMINEUSE, [LgEffect.NIGHT_VISION], "#68254D", false, false);
    public static LOUP_GAROU_AMNESIQUE      = new LgRole('Loup-Garou Amnésique', LgTeam.LOUPS_GAROUS, LgAura.NEUTRE, [LgEffect.NIGHT_VISION], "#7C3D3E", false, false);
    public static VILAIN_PETIT_LOUP         = new LgRole('Vilain Petit Loup', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#CC4D79", false, false);
    public static LOUP_GAROU_VENGEUR        = new LgRole('Loup-Garou Vengeur', LgTeam.LOUPS_GAROUS, LgAura.NEUTRE, [LgEffect.NIGHT_VISION], "#B20000", false, false);
    public static LOUP_GAROU_GRIMEUR        = new LgRole('Loup-Garou Grimeur', LgTeam.LOUPS_GAROUS, LgAura.LUMINEUSE, [LgEffect.NIGHT_VISION], "#7C4939", false, false);
    public static LOUP_GAROU_ALPHA          = new LgRole('Loup-Garou Alpha', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#2F0000", false, false);
    public static GRAND_MECHANT_LOUP        = new LgRole('Grand Méchant Loup', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION, LgEffect.STRENGTH], "#560011", false, false);
    public static LOUP_GAROU_CRAINTIF       = new LgRole('Loup-Garou Craintif', LgTeam.LOUPS_GAROUS, LgAura.NEUTRE, [LgEffect.NIGHT_VISION, LgEffect.WEAKNESS], "#543833", false, false);
    public static LOUP_GAROU_OMEGA          = new LgRole('Loup-Garou Omega', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [], "#7C4F4F", false, false);
    public static LOUP_GAROU_HURLEUR        = new LgRole('Loup-Garou Hurleur', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#963737", false, false);
    public static LOUP_GAROU_SANGUINAIRE    = new LgRole('Loup-Garou Sanguinaire', LgTeam.LOUPS_GAROUS, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#930000", true, false);
    public static LOUP_GAROU_TENEBREUX      = new LgRole('Loup-Garou Ténébreux', LgTeam.LOUPS_GAROUS, LgAura.LUMINEUSE, [LgEffect.NIGHT_VISION], "#1F0000", true, false);


    public static SIMPLE_VILLAGEOIS         = new LgRole('Simple Villageois', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#99B0BF", false, false);
    public static MONTREUR_D_OURS           = new LgRole('Montreur d\'Ours', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#632409", false, false);
    public static RENARD                    = new LgRole('Renard', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#C44813", true, false);
    public static VOYANTE                   = new LgRole('Voyante', LgTeam.VILLAGE, LgAura.LUMINEUSE, [LgEffect.NIGHT_VISION], "#9713B0", true, true);
    public static ORACLE                    = new LgRole('Oracle', LgTeam.VILLAGE, LgAura.NEUTRE, [LgEffect.NIGHT_VISION], "#2F13B0", true, false);
    public static PRETRESSE                 = new LgRole('Prêtresse', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#AF8E50", true, true);
    public static DETECTIVE                 = new LgRole('Détective', LgTeam.VILLAGE, LgAura.NEUTRE, [], "#C1C8FF", true, false);
    public static FOSSOYEUR                 = new LgRole('Fossoyeur', LgTeam.VILLAGE, LgAura.OBSCURE, [], "#442F28", true, false);
    public static CHAMAN                    = new LgRole('Chaman', LgTeam.VILLAGE, LgAura.NEUTRE, [], "#316B31", true, false);
    public static JUMEAU                    = new LgRole('Jumeau', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#66A59F", true, false);
    public static CONTEUSE                  = new LgRole('Conteuse', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#A39361", false, true);
    public static ANALYSTE                  = new LgRole('Analyste', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#001870", true, false);
    public static ASTRONOME                 = new LgRole('Analyste', LgTeam.VILLAGE, LgAura.OBSCURE, [LgEffect.NIGHT_VISION], "#000D3F", true, true);//GERER LA NUIT AURA
    public static AUBERGISTE                = new LgRole('Aubergiste', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#36373D", true, false);
    public static DRUIDE                    = new LgRole('Druide', LgTeam.VILLAGE, LgAura.OBSCURE, [], "#0B3A0C", true, false);
    public static MARCHANDE_DE_FRUITS       = new LgRole('Marchande de Fruits', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#721F08", true, false);
    public static OCCULTISTE                = new LgRole('Occultiste', LgTeam.VILLAGE, LgAura.OBSCURE, [], "#261D24", false, false);
    public static VAUDOUISTE                = new LgRole('Vaudouiste', LgTeam.VILLAGE, LgAura.OBSCURE, [], "#231919", true, false);
    public static VIEUX_SAGE                = new LgRole('Vieux Sage', LgTeam.VILLAGE, LgAura.LUMINEUSE, [], "#7A5D5D", false, false);
    public static ESPION                    = new LgRole('Espion', LgTeam.VILLAGE, LgAura.NEUTRE, [], "#3D3A3B", true, false);

    public static PETITE_FILLE              = new LgRole('Petite Fille', LgTeam.VILLAGE, LgAura.NEUTRE, [LgEffect.NIGHT_VISION], "#774C72", false, true);

    public static ASSASSIN                  = new LgRole('Assassin', LgTeam.AUTRES, LgAura.OBSCURE, [LgEffect.STRENGTH], "#DC143C", false, true);

    public static LISTE_ALL_ROLES = [
        LgRoles.LOUP_GAROU,
        LgRoles.INFECT_PERE_DES_LOUPS,
        LgRoles.LOUP_GAROU_FEUTRE,
        LgRoles.LOUP_GAROU_PERFIDE,
        LgRoles.LOUP_GAROU_MYSTIQUE,
        LgRoles.LOUP_GAROU_AMNESIQUE,
        LgRoles.VILAIN_PETIT_LOUP,
        LgRoles.LOUP_GAROU_VENGEUR,
        LgRoles.LOUP_GAROU_GRIMEUR,
        LgRoles.LOUP_GAROU_ALPHA,
        LgRoles.GRAND_MECHANT_LOUP,
        LgRoles.LOUP_GAROU_CRAINTIF,
        LgRoles.LOUP_GAROU_OMEGA,
        LgRoles.LOUP_GAROU_HURLEUR,
        LgRoles.LOUP_GAROU_SANGUINAIRE,
        LgRoles.LOUP_GAROU_TENEBREUX,

        LgRoles.SIMPLE_VILLAGEOIS,
        LgRoles.MONTREUR_D_OURS,
        LgRoles.RENARD,
        LgRoles.VOYANTE,
        LgRoles.ORACLE,
        LgRoles.PRETRESSE,
        LgRoles.DETECTIVE,
        LgRoles.FOSSOYEUR,
        LgRoles.CHAMAN,
        LgRoles.JUMEAU,
        LgRoles.CONTEUSE,
        LgRoles.ANALYSTE,
        LgRoles.AUBERGISTE,
        LgRoles.DRUIDE,
        LgRoles.MARCHANDE_DE_FRUITS,
        LgRoles.OCCULTISTE,
        LgRoles.VAUDOUISTE,
        LgRoles.VIEUX_SAGE,
        LgRoles.ESPION,
        LgRoles.PETITE_FILLE,


        LgRoles.ASSASSIN
    ]

    
    public static MAP_ROLES_EFFETS_NUIT = this.createMapRolesEffectsNight();

    public static createMapRolesEffectsNight(): Map<LgRole,LgEffect[]> {
        let result = new Map();
        result.set(LgRoles.LOUP_GAROU, [LgEffect.STRENGTH]);
        result.set(LgRoles.INFECT_PERE_DES_LOUPS, [LgEffect.STRENGTH]);
        result.set(LgRoles.LOUP_GAROU_FEUTRE, [LgEffect.STRENGTH]);
        result.set(LgRoles.LOUP_GAROU_PERFIDE, [LgEffect.INVISIBILITY]);
        result.set(LgRoles.LOUP_GAROU_MYSTIQUE, [LgEffect.STRENGTH]);
        result.set(LgRoles.LOUP_GAROU_AMNESIQUE, [LgEffect.STRENGTH]);
        result.set(LgRoles.VILAIN_PETIT_LOUP, [LgEffect.STRENGTH, LgEffect.SPEED]);
        result.set(LgRoles.LOUP_GAROU_VENGEUR, [LgEffect.STRENGTH]);
        result.set(LgRoles.LOUP_GAROU_GRIMEUR, [LgEffect.STRENGTH]);
        result.set(LgRoles.LOUP_GAROU_ALPHA, [LgEffect.STRENGTH, LgEffect.ABSORPTION]);



        result.set(LgRoles.LOUP_GAROU_HURLEUR, [LgEffect.STRENGTH]);
        result.set(LgRoles.LOUP_GAROU_SANGUINAIRE, [LgEffect.STRENGTH]);
        result.set(LgRoles.LOUP_GAROU_TENEBREUX, [LgEffect.STRENGTH]);


        result.set(LgRoles.PETITE_FILLE, [LgEffect.WEAKNESS, LgEffect.INVISIBILITY]);
        

        return result;
    }

    public static MAP_ROLES_EFFETS_JOUR = this.createMapRolesEffectsDay();
    
    
    public static createMapRolesEffectsDay(): Map<LgRole, LgEffect[]> {
        let result = new Map();

        result.set(LgRoles.ASSASSIN, [LgEffect.STRENGTH]);

        return result;
    }

}
