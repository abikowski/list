import {Component, OnInit} from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  people: Person[] = [];

  constructor(private personLsService: PersonLsService,) {

  }

  delete(index:number): void{
      if(confirm("Delete this person from list?"))
      {
        this.personLsService.deletePerson(index);
        this.people = this.personLsService.getAll();
      }
  }

  ngOnInit(): void {
    this.people = this.personLsService.getAll()
  }

}
