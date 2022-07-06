import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { IconHeaderComponent } from './components/icon-header/icon-header.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { EmptyComponentComponent } from './components/empty-component/empty-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDividerModule} from '@angular/material/divider';


const routes: Routes = [
  {path:'',redirectTo:'welcome', pathMatch: 'full' },
  {path: 'home', component: EmptyComponentComponent},
  {path: 'welcome', component: WelcomePageComponent},




]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IconHeaderComponent,
    WelcomePageComponent,
    EmptyComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DragDropModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
