import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RegisterService } from 'src/app/shared/register/service/register.service';
import { Register } from 'src/app/shared/register/model/register';
import { Plane } from 'src/app/shared/plane/model/plane';
import { Helper } from './helper';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  public index: number;
  public color: string;
  public isCarouselEnabled: Boolean;
  public register$: Observable<Array<Register>>;
  public planes: Array<Plane> = [];

  constructor(private registerService: RegisterService) { 
    this.planes = new Helper().getData();
  }

  ngOnInit() {
    this.isCarouselEnabled = true;
    this.color = 'primary';
    this.index = 0;
    this.change(0, 'CF-1', this);
  }

  public change(index: number, line: string, scope: any): void {    
    var self = scope;
    self.index = index;
    self.register$ = self.registerService.getLinhaGroupByPosto(line);
    self.carousel();   
  }

  public enableCarousel() {
    this.isCarouselEnabled = !this.isCarouselEnabled;
    this.carousel();    
  }

  public carousel(): void {
    let plane: Plane = this.planes[(this.index + 1) % this.planes.length];
    
    if(this.isCarouselEnabled) {
      setTimeout(this.change, 30000, plane.index, plane.line, this);
    }
  }

}
