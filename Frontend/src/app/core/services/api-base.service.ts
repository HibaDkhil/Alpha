import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
export abstract class ApiBaseService {
  protected http=inject(HttpClient);
  protected baseUrl=environment.apiBaseUrl;
}