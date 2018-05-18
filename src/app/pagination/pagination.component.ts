import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PagingServiceService, Girl } from '../shared/paging-service.service';
import { Observable } from 'rxjs/Observable';
import { PaginationInstance } from 'ngx-pagination/dist/ngx-pagination.module';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PaginationComponent implements OnInit {

  girls: any;

  pageConf: PaginationInstance = {
    id: 'paging',
    currentPage: 1,
    itemsPerPage: 8
  };
  labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next'
};

  constructor(private pagingService: PagingServiceService) { }

  ngOnInit() {
    this.getGirlsHandler();
  }
  onPageChange(number: number) {
    this.pageConf.currentPage = number;
    this.getGirlsHandler();
  }
  // 展示数据
  private getGirlsHandler() {
    this.pagingService.getGirls({pageNum: this.pageConf.currentPage, pageSize: this.pageConf.itemsPerPage}).subscribe(
      data => {
        this.girls = data;
        this.pageConf['totalItems'] = data['totalCount'];
      }
    );
  }

}
