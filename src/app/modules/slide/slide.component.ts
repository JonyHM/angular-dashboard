import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RegisterService } from 'src/app/shared/register/service/register.service';
import { Register } from 'src/app/shared/register/model/register';
import { Plane } from 'src/app/shared/plane/model/plane';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  public index: number;
  public enableCarousel: Boolean;
  public register$: Observable<Array<Register>>;
  public planes: Array<Plane> = [
    {
      alt: 'CF-1 parts',
      index: 0,
      line: 'CF-1',
      imagePath: '../../../assets/CF-1.png'
    },{
      alt: 'CF-3 parts',
      index: 1,
      line: 'CF-3',
      imagePath: '../../../assets/CF-3.png'
    },{
      alt: 'Portas Legacy parts',
      index: 2,
      line: 'Portas Legacy',
      imagePath: '../../../assets/ELP.png'
    },{
      alt: 'Over Wings parts',
      index: 3,
      line: 'OW',
      imagePath: '../../../assets/OW.png'
    }
  ];

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.enableCarousel = true;
    this.index = 0;
    this.change(0, 'CF-1', this);
  }

  public change(index: number, line: string, scope: any): void {    
    var that = scope;
    that.index = index;
    that.register$ = that.registerService.getLinhaGroupByPosto(line);
    that.carousel();
  }

  public carousel(): void {
    let plane: Plane = this.planes[(this.index + 1) % this.planes.length];
    setTimeout(this.change, 30000, plane.index, plane.line, this);
  }

}
