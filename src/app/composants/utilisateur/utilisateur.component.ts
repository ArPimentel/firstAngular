import { Component } from '@angular/core';
import { DonnesService } from '../../services/donnes.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
prenom : string;
nom : string;
age : number;
email: string;
hobby: hobby;

  constructor(private donnees: DonnesService){
  this.prenom = 'Arturo';
  this.nom = 'Pimentel';
  this.age = 34;
  this.email = 'pimentel.arturo@gmail.com';
  this.hobby = {
    hobbyUn: 'Escalade',
    hobbyDeux: 'Taewkondo',
    hobbyTrois: 'JeuxVideos'
  };
}
onClick() {
  alert('No further information for the time being. !');
  
}
}

  interface hobby{
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;
}


