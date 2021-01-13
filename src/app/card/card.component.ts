import { Component, OnInit } from '@angular/core';
import {CardServiceService} from '../card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardServiceService) { }
  cardActualite = [];

  ngOnInit(): void {
    this.getCard();
  }
  // tslint:disable-next-line:typedef
  getCard(){
    this.cardService.getActualite().subscribe( (data: any[]) => {
      this.cardActualite = data;
      console.log('l\' actualité est :' + data);
    });
  }
}
