import { Component, OnInit } from '@angular/core';
import { Unit } from '../../../model/unit/unit.model';
import { UnitService } from '../../../service/unit/unit.service';

@Component({
  selector: 'app-unitlist',
  templateUrl: './unitlist.component.html',
  styleUrls: ['./unitlist.component.css']
})
export class UnitlistComponent implements OnInit {

  units: Unit[];
  unit: Unit;

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.showUnits();
  }

  onSubmit() {
    console.log(this.unit);
    this.unitService.saveUnit(this.unit).subscribe(result => {
      this.showUnits();
    })
  }

  showUnits(): void {
    this.unit = new Unit();
    this.unitService.findAll().subscribe(data => {
      this.units = data;
    });
  }

}
