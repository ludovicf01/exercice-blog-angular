import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
        title: 'Mon premier post',
        content: 'Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.',
        loveIts: 1,
        created_at: Date()
    },
    {
        title: 'Mon deuxième post',
        content: 'Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.',
        loveIts: -1,
        created_at: Date()
    },
    {
        title: 'Encore un post',
        content: 'Proprium proprium simulatione utilitates a coniungendam quidem nihil minus propter amicitiae et meritis quisque etiam.',
        loveIts: 0,
        created_at: Date()
    }
  ];
  
}
