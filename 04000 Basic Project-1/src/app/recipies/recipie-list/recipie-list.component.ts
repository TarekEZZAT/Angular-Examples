import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  
  recipies: Recipie[]=[
    new Recipie('spaetzle', "Pâtes de la région l'Alsace-Moselle", 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/08/20/0/FNM_100120-Spinach-Spaetzle_s4x3.jpg.rend.hgtvcom.616.462.suffix/1597931244022.jpeg' ),
    new Recipie('Kugelhopf', "Savoureuse brioche à base de raisins secs et d'amandes entières", 'https://www.regal.fr/sites/art-de-vivre/files/r57_kougelhopf_bw.jpg' ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
