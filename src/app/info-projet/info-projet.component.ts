import { Component, OnInit } from '@angular/core';
import {ActiviteService} from '../activite.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-info-projet',
  templateUrl: './info-projet.component.html',
  styleUrls: ['./info-projet.component.scss']
})
export class InfoProjetComponent implements OnInit {

  constructor(private activiteService: ActiviteService) { }
  activites = [];

  ngOnInit(): void {
      this.activiteService.getActivite().subscribe((data: any[]) => {
        console.log(data);
        this.activites = data;
      });
  }

}
