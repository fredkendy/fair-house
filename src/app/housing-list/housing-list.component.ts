//Utilizando Input como decorador de entrada (componente receber valor de um modelo html)
//Output permite que os componentes enviem um evento com os dados do filho para o componente pai
//EventEmitter notifica os listeners de eventos
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})

export class HousingListComponent implements OnInit {

  //locationSelectedEvent foi decorada com o Output, oq faz com que ela faça parte da API deste componente
  //Generics para fornecer o tipo HousingLocation
  //Quando um evento é emitido pelo locationSelectedEvent, os listeners do evento podem esperar que os dados correspondentes sejam do tipo HousingLocation
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  //acionar método ao clicar botão View
  selectHousingLocation(location: HousingLocation) {
    //emita um novo evento do emissor locationSelectedEvent. O valor emitido é o local selecionado pelo usuário.
    this.locationSelectedEvent.emit(location);
  }

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
