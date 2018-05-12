import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beer:any = []
  category:any = []

  constructor(
    public _beerService:BeerService,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.map(
      params => params.id
    ).subscribe(
      id => {
        this._beerService.getbeer(id).subscribe(
          data => {
            this.beer = data.json().data
            console.log(this.beer)
            this._beerService.getCategoryId(this.beer.style.categoryId).subscribe(
              data => this.category = data
            )
          }
        )
      }
    )
  }

}
