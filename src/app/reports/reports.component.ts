import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {ReportsServiceService} from 'src/app/reports-service.service';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  treeNodes:TreeNode[];
  public reportUrl: SafeResourceUrl;
  constructor(private reportService:ReportsServiceService,private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.reportService.getReports().then(nodes=>this.treeNodes=nodes);
  }  
  nodeSelect(event){
    this.reportUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(event.node.data);
  }
}
