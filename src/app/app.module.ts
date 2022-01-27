import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    SinglePostComponent,
    FormComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
