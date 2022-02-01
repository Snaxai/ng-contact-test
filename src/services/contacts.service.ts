import { IContact } from './../models/contact.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _contacts: IContact[] = [];
  private _error: string = '';

  // DI - Dependency injection
  constructor(private readonly http: HttpClient) {}

  public fetchContacts(): void {
    this.http.get<IContact[]>('http://localhost:3000/contacts').subscribe(
      (contacts: IContact[]) => {
        this._contacts = contacts;
      },
      (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    );
  }
  contacts(): IContact[] {
    return this._contacts;
  }

  error(): string {
    return this._error;
  }
}
