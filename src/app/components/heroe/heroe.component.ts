import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any;
  constructor(private activaterRoute:ActivatedRoute,
              private router:Router,
              private servicio:HeroesService) { 
  
    this.activaterRoute.params.subscribe(resp => {
      this.heroe = this.servicio.getHeroe(resp['id'])
      console.log(this.heroe)
    })

  }

  ngOnInit(): void {
  }
  
}
