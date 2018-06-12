import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { StoryComponent } from './pages/story/story.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { NewStoryComponent } from './pages/new-story/new-story.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    HeaderComponent,
    FooterComponent,
    StoriesComponent,
    HomeComponent,
    StoryComponent,
    AuthorListComponent,
    NewStoryComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
