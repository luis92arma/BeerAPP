import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [BeerService]
})
export class CategoryComponent implements OnInit {

  constructor(public _beerService: BeerService) { }

  ngOnInit() {
    this._beerService.getCategory().subscribe(
      data => console.log(data)
    );
    //this._beerService.getCategory()
  //   this._beerService.getCategory().subscribe(
  //   response => {
  //     console.log(response.json())
  //   }
  // )
  }

}
