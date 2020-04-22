import { Component, OnInit } from '@angular/core';
import {CompteService} from '../../services/compte.service';
import {Compte} from '../compte';
import {Router} from '@angular/router';
import { Client } from 'src/app/client/client';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {
  compte:Compte=new Compte();
  submitted=false;
  client:Client;
  constructor(private compteService:CompteService,private router:Router) { }

  ngOnInit(): void {
  }

  newCompte():void{
    this.submitted=false;
    this.compte=new Compte();
  }

  save() {
    this.compteService.createCompte(this.compte)
      .subscribe(data => console.log(data), error => console.log(error));
    this.compte = new Compte();
    this.compteService.createCompte(this.compte);
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/comptes']);

  }

}
