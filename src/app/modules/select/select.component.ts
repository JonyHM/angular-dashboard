import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Register } from 'src/app/shared/register/model/register';
import { RegisterService } from 'src/app/shared/register/service/register.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  private ranges: Array<string> = [];
  private line: string;
  private range: string;
  public register$: Observable<Array<Register>>;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
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
    this.register$ = this.registerService.getLinhaRangeGroupByPosto(this.line, this.range);
  }

}
