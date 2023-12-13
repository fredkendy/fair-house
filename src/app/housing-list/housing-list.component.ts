//Utilizando Input como decorador de entrada (componente receber valor de um modelo html)
import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})

export class HousingListComponent implements OnInit {

  //utilizando Input como decorador para locationList
  @Input() locationList: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  //Recebe parametro do botão no html
  searchHousingLocations(searchText: string) {
    console.log(searchText);
  }

}
