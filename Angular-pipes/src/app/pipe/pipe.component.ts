import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  Message: String = 'Angular 8,0 is a Component Based Framework';
  currentdate: Number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
