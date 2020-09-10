import { Component, OnInit } from '@angular/core';
import { ArgonautsService } from '../services/argonauts.service';
import { Argonaut } from '../models/argonaut.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';


const mockData = [
  { name: 'Argounaut 1', rank: 1 },
  { name: 'Argounaut 2', rank: 2 },
  { name: 'Argounaut 3', rank: 3 },
  { name: 'Argounaut 4', rank: 4 },
  { name: 'Argounaut 5', rank: 5 }
]

@Component({
  selector: 'app-argonauts',
  templateUrl: './argonauts.component.html',
  styleUrls: ['./argonauts.component.scss']
})
export class ArgonautsComponent implements OnInit {

  argonauts: Argonaut [] = [];
  dataSource = [];
  displayedColumns: string[] = ['name', 'rank'];
  newArgonaut: Argonaut = new Argonaut();

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
  });

    constructor(private argonautsSevice: ArgonautsService) { }


ngOnInit(): void {
  this.argonautsSevice.getAllArgonauts().subscribe(data => {
    this.argonauts = data;
    console.log(this.argonauts)
    this.dataSource = data;
  });
}


  addNewArgonaut() {
    this.newArgonaut.name = this.formGroup.value.name;
    this.dataSource.push(this.newArgonaut);
    console.log(this.newArgonaut)
    this.argonautsSevice.postArgonaut(this.newArgonaut).subscribe((res: Response) => {
      console.log('response is:', res);
    });
  }


}
