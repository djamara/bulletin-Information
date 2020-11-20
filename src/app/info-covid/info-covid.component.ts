import { Component, OnInit } from '@angular/core';
import {BilanCovidService} from '../bilan-covid.service';
@Component({
  selector: 'app-info-covid',
  templateUrl: './info-covid.component.html',
  styleUrls: ['./info-covid.component.scss']
})
export class InfoCovidComponent implements OnInit {

  constructor(private bilanCovidService: BilanCovidService) { }
  bilanCovid = [];
  infectes;
  gueris;
  decedes;

  ngOnInit(): void {
    this.bilanCovidService.getBilanCovid().subscribe((data: any[]) => {
      console.log(data[0]);
      this.bilanCovid = data[0];
    });
  }

}
