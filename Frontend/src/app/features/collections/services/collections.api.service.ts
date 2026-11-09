import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../../../core/services/api-base.service';
import { Collection } from '../models/collection.model';
@Injectable({providedIn:'root'})
export class CollectionApiService extends ApiBaseService {
  private endpoint = `${this.baseUrl}/collections`;
  getAll(): Observable<Collection[]> { return this.http.get<Collection[]>(this.endpoint); }
  getById(id:number): Observable<Collection> { return this.http.get<Collection>(`${this.endpoint}/${id}`); }
}
