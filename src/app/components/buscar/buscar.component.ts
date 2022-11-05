import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes:Heroe [] = [];
  parametro:string='';

  constructor(private activatedRoute: ActivatedRoute,
            private servicio: HeroesService) { 

            }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resp => {
      this.parametro = resp['id'];
      this.heroes = this.servicio.buscarHeroes(this.parametro);
    })
  }
  verHeroe(idx:any){
    console.log(idx)
  }

}
