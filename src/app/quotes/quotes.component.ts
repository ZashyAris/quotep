import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  quotes:Quote[]= [
    new Quote (1, 'Sharon', 'John', 'Jesus Wept', new Date(1995, 5, 20 )),
    new Quote (2, 'Zashy', 'Bob Andrew','Some people are so poor that all they have is money', new Date(2000 , 12 ,7)),
    new Quote (3,'Hillary', 'Hillah','Even the big dog was once a puppy',new Date(2020 , 1 ,13)),
  
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }



        deleteQuote(isComplete, index){
          if (isComplete) {
            let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
            if (toDelete){
              this.quotes.splice(index,1)
            }
          }
        }
        addNewQuote(quote){
          let quoteLength = this.quotes.length;
          quote.id = quoteLength + 1;
          quote.completeDate = new Date(quote.completeDate)
          this.quotes.push(quote)
        }
  constructor() { }

  ngOnInit() {
  
}
}