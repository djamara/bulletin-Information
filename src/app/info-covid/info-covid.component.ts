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
  date;

  ngOnInit(): void {
    this.bilanCovidService.getBilanCovid().subscribe((data: any[]) => {
      console.log(data[0].bilanCovid_date);
      this.bilanCovid = data[0];
      this.date = data[0].bilanCovid_date;
      this.infectes = data[0].bilanCovid_nbre_infectes;
      this.gueris = data[0].bilanCovid_gueris;
      this.decedes = data[0].bilanCovid_deces;
    });
  }

}
