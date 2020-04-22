export class Compte{
    type:string;
    numCompte:number;
    dateCreation:Date;
    solde:Number;
    client:{
        id:number;
        nom:string;
    };
    taux:number;
    decouvert:number;
    
}