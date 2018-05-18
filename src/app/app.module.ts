import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagingServiceService } from './shared/paging-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [PagingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
