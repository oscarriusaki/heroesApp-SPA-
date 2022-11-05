import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe []=[];

  constructor(private servicio: HeroesService,
              private router:Router ) { 

    this.heroes = this.servicio.getHeroes();
    
  }

  ngOnInit(): void {

  }
  verHeroe(idx:Number) {
    this.router.navigate(['heroe',idx])
  }
  
}
