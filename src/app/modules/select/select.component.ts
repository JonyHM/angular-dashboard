import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Register } from 'src/app/shared/register/model/register';
import { RegisterService } from 'src/app/shared/register/service/register.service';
import { Part } from 'src/app/shared/part/model/part';
import { Helper } from '../slide/helper';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public alt: String;
  private line: string;
  public range: string;
  public lineDesc: String;
  public imagePath: String;
  public imageVisible: boolean;
  public lines: Array<Part> = [];
  public ranges: Array<string> = [];
  public register$: Observable<Array<Register>>;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.lines = new Helper().getData();
  }

  public getRanges(line: string) {
    this.ranges = [];
    this.line = line;

    this.registerService.getDistinctRangeByLinha(line)
      .subscribe(ranges => {
        ranges.forEach(range => this.ranges.push(range.range));
      });
  }

  public search(): void {
    this.lineDesc = this.line;
    this.register$ = this.registerService.getLinhaRangeGroupByPosto(this.line, this.range);
    this.lines.forEach(line => {
      if (line.line == this.line) {
        this.imagePath = line.imagePath;
        this.alt = line.alt;
        this.imageVisible = true;
      }
    });
  }

}
