import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://localhost:5001/odata/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) { }

  getPeople(sort: string): Observable<Person[]> {
    if (sort==''){
      var url = `${this.apiUrl}People`;
    } else {
      var url = `${this.apiUrl}People?$orderby=${sort}`;
    }
    return this.http.get<Person[]>(url).pipe(
      tap(_ => this.log(`fetched people`)),
      catchError(this.handleError<Person[]>(`getPeople`))
    );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.apiUrl}People(${id})`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  searchPeople(by: string, term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty person array.
      return of([]);
    }
    if (by == 'Name'){
      return this.http.get<Person[]>(`${this.apiUrl}People/?$filter=
      (contains(tolower(GivenName),tolower('${term}'))) or 
      (contains(tolower(Surname),tolower('${term}')))`).pipe(
        tap(_ => this.log(`fetched searched people`)),
        catchError(this.handleError<Person[]>(`getPeople`))
      );
    }
  }

  // Save methods //
  addPerson (person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}People`, person, this.httpOptions).pipe(
      tap((newPerson: Person) => this.log(`added person w/ id=${newPerson.Id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  deletePerson (person: Person): Observable<any> {
    const id = typeof person === 'number' ? person : person.Id;
    const url = `${this.apiUrl}People(${id})`;

    return this.http.delete<Person>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

  updatePerson (person: Person): Observable<any> {
    return this.http.put(`${this.apiUrl}People(${person.Id})`, person, this.httpOptions).pipe(
      tap(_ => this.log(`update person id=${person.Id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`${message}`);
  }
}
