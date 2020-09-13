import { Component, OnInit, ViewChild } from '@angular/core';
import { ArgonautsService } from '../services/argonauts.service';
import { Argonaut } from '../models/argonaut.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';

@Component({
  selector: 'app-argonauts',
  templateUrl: './argonauts.component.html',
  styleUrls: ['./argonauts.component.scss']
})

export class ArgonautsComponent implements OnInit {

  argonauts: Argonaut[] = [];
  dataSource = new MatTableDataSource<Argonaut>(this.argonauts);
  displayedColumns: string[] = ['id', 'name', 'delete'];
  newArgonaut: Argonaut = new Argonaut();
  isAdded: boolean;
  message = '';

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private argonautsSevice: ArgonautsService) { }

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.argonautsSevice.getAllArgonauts().subscribe(data => {
      this.argonauts = data;
      this.dataSource = new MatTableDataSource(this.argonauts);
      this.sort.sort(({ id: 'id', start: 'desc' }) as MatSortable);
      this.dataSource.sort = this.sort;
    });
  }

  addNewArgonaut() {
    if (this.formGroup.value.name !== '') {
      this.newArgonaut.name = this.formGroup.value.name;
      this.argonautsSevice.postArgonaut(this.newArgonaut).subscribe((res) => {
        if (res.error === false) {
          this.isAdded = true;
          this.message = res.message;
          this.newArgonaut.id = res.data;
          this.argonauts.push(this.newArgonaut);
          this.dataSource = new MatTableDataSource(this.argonauts);
          this.dataSource.sort = this.sort;
        } else {
          this.message = 'Error in communicating with server, please try later.';
        }
      });
    } else {
      this.isAdded = true;
      this.message = 'Please enter the name of the Argonaut';
    }
  }

  deleteArgonaut(argonaut, index) {
    this.argonautsSevice.deleteArgonaut(argonaut.id).subscribe(resp => {
        this.argonauts.splice(this.argonauts.findIndex(item => item.id === argonaut.id), 1);
        this.dataSource = new MatTableDataSource(this.argonauts);
        this.dataSource.sort = this.sort;
        this.isAdded = true;
        this.message = resp.message;
        setTimeout(() => {
          this.message = '';
        }, 1000);
    });
  }
}
