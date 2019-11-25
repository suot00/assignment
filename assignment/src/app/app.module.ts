import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { DanhmucmonComponent } from './danhmucmon/danhmucmon.component';
import { TracnghiemComponent } from './tracnghiem/tracnghiem.component';
import { AboutasmComponent } from './aboutasm/aboutasm.component';
import { MenuasmComponent } from './menuasm/menuasm.component';
import { ServicesasmComponent } from './servicesasm/servicesasm.component';
import { TeacherasmComponent } from './teacherasm/teacherasm.component';
import { SignupComponent } from './signup/signup.component';
import { ContactasmComponent } from './contactasm/contactasm.component';
import { ThiasmComponent } from './thiasm/thiasm.component';

const appRoutes: Routes = [
  { path: 'assignment', component: AssignmentComponent },
  { path: 'aboutasm', component: AboutasmComponent },
  { path: 'teacherasm', component: TeacherasmComponent },
  { path: 'servicesasm', component: ServicesasmComponent },
  { path: 'contactasm', component: ContactasmComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'danhmucmon', component: DanhmucmonComponent },
  { path: 'danhmucmon/:Id', component: ThiasmComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    LoginComponent,
    DanhmucmonComponent,
    TracnghiemComponent,
    AboutasmComponent,
    MenuasmComponent,
    ServicesasmComponent,
    TeacherasmComponent,
    SignupComponent,
    ContactasmComponent,
    ThiasmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
