import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { FilterPipe } from './filter.pipe';
import { SortingPipe } from './sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    FilterPipe,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
