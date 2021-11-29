import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';


import { HttpClientModule } from '@angular/common/http';
import { IpService } from './ip.service';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  providers:    [IpService],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
