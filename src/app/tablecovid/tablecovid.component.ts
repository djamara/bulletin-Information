import { Component, OnInit } from '@angular/core';
import { WavesModule, TableModule } from 'ng-uikit-pro-standard';
import {BilanActiviteService} from '../bilan-activite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablecovid',
  templateUrl: './tablecovid.component.html',
  styleUrls: ['./tablecovid.component.scss']
})
export class TablecovidComponent implements OnInit {

  constructor(private bilanActiviteService: BilanActiviteService) { }
  bilanActivites = [];

  ngOnInit(): void {
    this.bilanActiviteService.getBilanActivite().subscribe((data: any[]) => {
      console.log(data);
      this.bilanActivites = data;
    });
  }

}
