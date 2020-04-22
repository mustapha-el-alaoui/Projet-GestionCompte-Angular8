import { Component, OnInit } from '@angular/core';
import {Compte} from '../compte';
import {CompteService} from '../../services/compte.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-compte-details',
  templateUrl: './compte-details.component.html',
  styleUrls: ['./compte-details.component.css']
})
export class CompteDetailsComponent implements OnInit {
  numCompte:number;
  compte:Compte;

  constructor(private route:ActivatedRoute,private router:Router,private compteService:CompteService) { }

  ngOnInit(): void {
    this.compte = new Compte();

    this.numCompte = this.route.snapshot.params['numCompte'];
    
    this.compteService.getCompte(this.numCompte)
      .subscribe(data => {
        console.log(data)
        this.compte = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['comptes']);
  }

}
