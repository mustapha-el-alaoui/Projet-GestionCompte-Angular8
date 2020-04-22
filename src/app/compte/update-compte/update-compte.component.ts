import { Component, OnInit } from '@angular/core';
import {Compte} from '../compte';
import {ActivatedRoute,Router} from '@angular/router';
import {CompteService} from '../../services/compte.service';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
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

  updateCompte() {
    this.compteService.updateCompte(this.numCompte, this.compte)
      .subscribe(data => console.log(data), error => console.log(error));
    this.compte = new Compte();
    this.gotoList();
  }

  onSubmit() {
    this.updateCompte();    
  }

  gotoList() {
    this.router.navigate(['/comptes']);
  }

}
