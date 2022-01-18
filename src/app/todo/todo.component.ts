import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  Item = [
    { description: 'Aller chercher le chien'},
  ];

  get items() {
      return this.Item;
  }

  add(value: string) {
    if(value === "") {
      alert("Vous ne pouvez pas rien ajouter")
    } else {
      this.Item.unshift({
        description : value,
      })
    }
  }

  edit(item: any){
    let index = this.Item.indexOf(item);
    let title = this.Item[index].description;
    let result = prompt("Modifier la tâche :", title);
    if (result !== null && result !== ""){
      this.Item[index].description = result;
    }
  }

  delete(item: any) {
    this.Item.splice(this.Item.indexOf(item), 1);
  }
}
