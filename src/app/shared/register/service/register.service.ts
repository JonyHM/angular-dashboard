import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Register } from '../model/register';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {
  range: string = '';
  urlbase: string = environment.URL;

  constructor(private http: HttpClient) {}

  /* obtém os postos da linha com os valores de média e total */
  public getLinhaGroupByPosto(linha: string): Observable<Register[]> {
    return this.http.get<Register[]>(this.urlbase + '/group/' + linha)
      .pipe(
        catchError(this.handleError<Register[]>('getStatsLinha'))
      );
  }

  /* obtém os range da linha */
  public getDistinctRangeByLinha(linha: string): Observable<Register[]> {
    return this.http.get<Register[]>(this.urlbase + '/drange/' + linha + '')
      .pipe(
        catchError(this.handleError<Register[]>('getDistinctRangeByLinha'))
      );
  }

  /* obtém os postos da linha e range com os valores de média e total */
  public getLinhaRangeGroupByPosto(linha: string, range: string): Observable<Register[]> {
    console.log(linha);
    console.log(range);

    if (range !== '') {
      return this.http.get<Register[]>(this.urlbase + '/group/' + linha + '/' + range)
        .pipe(
          catchError(this.handleError<Register[]>('getLinhaRangeGroupByPosto'))
        );
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} falhou: ${error.message}`);
      return of(result as T);
    };
  }
}
