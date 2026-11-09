import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../../../core/services/api-base.service';
import { RewardSummary } from '../models/reward.model';
@Injectable({providedIn:'root'})
export class RewardSummaryApiService extends ApiBaseService {
  private endpoint = `${this.baseUrl}/rewards`;
  getAll(): Observable<RewardSummary[]> { return this.http.get<RewardSummary[]>(this.endpoint); }
  getById(id:number): Observable<RewardSummary> { return this.http.get<RewardSummary>(`${this.endpoint}/${id}`); }
}
