import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { FormsModule } from '@angular/forms';
import { TextshadowDirective } from './textshadow.directive';
import { DatePipePipe } from './date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TextshadowDirective,
    DatePipePipe,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
