import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../../../core/services/api-base.service';
import { ImpactSummary } from '../models/impact.model';
@Injectable({providedIn:'root'})
export class ImpactSummaryApiService extends ApiBaseService {
  private endpoint = `${this.baseUrl}/impact`;
  getAll(): Observable<ImpactSummary[]> { return this.http.get<ImpactSummary[]>(this.endpoint); }
  getById(id:number): Observable<ImpactSummary> { return this.http.get<ImpactSummary>(`${this.endpoint}/${id}`); }
}
