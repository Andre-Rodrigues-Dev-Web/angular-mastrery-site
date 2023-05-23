import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopoComponent } from './shared/components/topo/topo.component';
import { HomeComponent } from './shared/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
