import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { CommunityComponent } from './community/community.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CommonModule } from '@angular/common';
import { ParticlesModule } from 'angular-particle';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommunityComponent,
    TopNavigationComponent,
    NavigationMenuComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ParticlesModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
