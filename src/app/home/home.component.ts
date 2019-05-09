import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  alist = [
            {'name': 'veggies','done':false},
            {'name': 'fruits','done':false},
            {'name': 'milk','done':false},
            {'name': 'bread','done':false},
            {'name': 'eggs','done':false}    
  ];
  
  stextEntered: string = '';
  stextEdited: string = '';
  bContentEditable: boolean = false;

  constructor() { }

  ngOnInit() {
  
  }

  addNew(){
    this.alist.unshift({'name':this.stextEntered,'done':false});
   
  }

  delete(olist){
   var pos = this.alist.map(function(element) { return element.name; }).indexOf(olist);
   this.alist.splice(pos, 1);
  }

  done(olist){

    if(olist.done == true){
        olist.done = false;
    } else {
      olist.done = true;
    }
  }

  edit(olist,name){
      olist.name = name;
      console.log(olist);
  }
}
