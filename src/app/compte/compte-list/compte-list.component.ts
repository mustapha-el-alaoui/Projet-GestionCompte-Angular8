import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../compte';
import {CompteService} from '../../services/compte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {
  comptes: Observable<Compte[]>;

  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.comptes = this.compteService.getComptesList();
  }

  createCompte() {
    this.router.navigate(['addCompte']);
  }

  deleteCompte(numCompte: number) {
    this.compteService.deleteCompte(numCompte)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCompte(numCompte: number){
    this.router.navigate(['updateCompte', numCompte]);
  }

  compteDetails(numCompte: number) {
    this.router.navigate(['detailsCompte', numCompte]);
  }

}
