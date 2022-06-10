import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  public error$: Subject<string> = new Subject<string>();
  public message$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  public get<T>(route: string): Observable<T> {
    return this.http
      .get<T>(this.createRoute(route))
      .pipe(
        catchError(this.handleError.bind(this)),
        tap(this.setMessage.bind(this))
      );
  }

  private createRoute = (route: string) => {
    return `${environment.apiURL}${route}`;
  };

  private setMessage(response: any) {
    const message = response.message;

    if (message) {
      this.message$.next(message);
    }

    setTimeout(() => {
      this.message$.next('');
    }, 2000);
  }

  private handleError(error: HttpErrorResponse) {
    const message = error.error.message;

    this.error$.next(message);

    setTimeout(() => {
      this.error$.next('');
    }, 2000);

    return throwError(error);
  }
}
