import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../../../core/services/api-base.service';
import { RecyclingCenter } from '../models/recycling.model';
@Injectable({providedIn:'root'})
export class RecyclingCenterApiService extends ApiBaseService {
  private endpoint = `${this.baseUrl}/recycling-centers`;
  getAll(): Observable<RecyclingCenter[]> { return this.http.get<RecyclingCenter[]>(this.endpoint); }
  getById(id:number): Observable<RecyclingCenter> { return this.http.get<RecyclingCenter>(`${this.endpoint}/${id}`); }
}
