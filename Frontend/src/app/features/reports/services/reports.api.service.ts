import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../../../core/services/api-base.service';
import { Report } from '../models/report.model';
@Injectable({providedIn:'root'})
export class ReportApiService extends ApiBaseService {
  private endpoint = `${this.baseUrl}/reports`;
  getAll(): Observable<Report[]> { return this.http.get<Report[]>(this.endpoint); }
  getById(id:number): Observable<Report> { return this.http.get<Report>(`${this.endpoint}/${id}`); }
}
