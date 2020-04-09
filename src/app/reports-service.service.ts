import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TreeNode } from 'primeng/api/treenode';

@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {

  constructor(private http:HttpClient) { }
  getReports(){
    let httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })};
    this.http.get('/TPMS/GetAllTheReports').toPromise().then(res=>console.log( res));
    return this.http.get('/TPMS/GetAllTheReports',httpOptions).toPromise().then(res=><TreeNode[]> res);
  }
}
