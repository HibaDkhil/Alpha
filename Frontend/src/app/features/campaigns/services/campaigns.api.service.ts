import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../../../core/services/api-base.service';
import { Campaign } from '../models/campaign.model';
@Injectable({providedIn:'root'})
export class CampaignApiService extends ApiBaseService {
  private endpoint = `${this.baseUrl}/campaigns`;
  getAll(): Observable<Campaign[]> { return this.http.get<Campaign[]>(this.endpoint); }
  getById(id:number): Observable<Campaign> { return this.http.get<Campaign>(`${this.endpoint}/${id}`); }
}
