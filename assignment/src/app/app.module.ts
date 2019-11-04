import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { DanhmucmonComponent } from './danhmucmon/danhmucmon.component';
import { TracnghiemComponent } from './tracnghiem/tracnghiem.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    LoginComponent,
    DanhmucmonComponent,
    // NgxPaginationModule,
    TracnghiemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgxPaginationModule,

    RouterModule.forRoot([

      { path: "login", component: LoginComponent },
      { path: "danhmucmon", component: DanhmucmonComponent }




    ], { enableTracing: true })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
