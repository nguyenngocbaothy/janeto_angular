import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './files/file/file.component';
import { MenuComponent } from './menu/menu.component';
import { FileService } from './provider/file.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    FileComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
