import { IEtudiant } from "./ietudiant";
export class Etudiant implements IEtudiant {
    constructor (
    public _nom: string,
    public _prenom: string,
    public _rue: string,
    public _cp: string,
    public _ville: string, 
    public _courriel: string,
    public _genre: string,
    public _age: number,
    public idcand: number
    ){}
}
