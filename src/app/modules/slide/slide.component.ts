import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RegisterService } from 'src/app/shared/register/service/register.service';
import { Register } from 'src/app/shared/register/model/register';
import { Part } from 'src/app/shared/part/model/part';
import { Helper } from './helper';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  public index: number;
  public color: string;
  public isCarouselEnabled: boolean;
  public register$: Observable<Array<Register>>;
  public parts: Array<Part> = [];
  public carouselToggle: string;
  private timeout: any;

  constructor(private registerService: RegisterService) {
    this.parts = new Helper().getData();
  }

  ngOnInit() {
    this.isCarouselEnabled = true;
    this.carouselToggle = !this.isCarouselEnabled ? 'Ativar carrossel' : 'Desativar carrossel';
    this.color = 'primary';
    this.index = 0;
    this.change(0, 'CF-1', this);
  }

  public change(index: number, line: string, scope: any): void {
    const self = scope;
    clearTimeout(self.timeout);
    self.index = index;
    self.register$ = self.registerService.getLinhaGroupByPosto(line);
    self.carousel();
  }

  public enableCarousel() {
    this.isCarouselEnabled = !this.isCarouselEnabled;
    this.carouselToggle = !this.isCarouselEnabled ? 'Ativar carrossel' : 'Desativar carrossel';
    this.carousel();
  }

  public carousel(): void {
    const plane: Part = this.parts[(this.index + 1) % this.parts.length];

    if (this.isCarouselEnabled) {
      this.timeout = setTimeout(this.change, 30000, plane.index, plane.line, this);
    }
  }

}
