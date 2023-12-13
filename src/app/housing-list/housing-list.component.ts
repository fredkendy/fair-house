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
  //A matriz de resultados representa os locais de residência que correspondem à pesquisa do usuário. 
  results: HousingLocation[] = []

  constructor() { }

  ngOnInit(): void {
  }

  //Recebe parametro do botão no html
  searchHousingLocations(searchText: string) {
    //evitar a pesquisa na matriz se searchText estiver em branco
    if (!searchText) return;
    //usamos o filtro 
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        //Todos os valores são comparados usando as versões em letras minúsculas das strings.
        .toLowerCase()
        //aceitamos somente valores que contenham o searchText
        .includes(
          searchText.toLowerCase()
        )
    );
  }

}
