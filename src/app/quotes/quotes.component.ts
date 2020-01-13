import { Component, OnInit } from '@angular/core';
import { Quote } from '../qoutes';?.

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]= [
    {id:1, name:'Old is gold'},
    {id:2,name: 'Some people are so poor that all they have is money' },
    {id:3,name:'even the big dog was once a puppy'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
