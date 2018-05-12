import { Component, OnInit } from '@angular/core'
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = '';
  constructor(private _beerService: BeerService) { }

  ngOnInit() {
    // this._beerService.getbeers('Goosinator').subscribe(
    //   data => console.log(data)
    // )
  }

  searchBeer(){
    if(this.search.length > 0){
      this._beerService.getbeers(this.search).subscribe(
        data => console.log(data)
      );
    }else{
      return
    }

  }

}
