import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  public index: number;

  constructor() { }

  ngOnInit() {
    this.index = 3;
  }

  public mudar(numero: number) {
    this.index = numero;
  }

}
