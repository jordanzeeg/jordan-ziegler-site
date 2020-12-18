import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErsteComponent } from './erste/erste.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ZweiteComponent } from './zweite/zweite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechScreenManagementComponent } from './tech-screen-management/tech-screen-management.component';
import { RevatureSocialNetworkComponent } from './revature-social-network/revature-social-network.component';
import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system/expense-reimbursement-system.component';
import { MobileSolarPowerStationComponent } from './mobile-solar-power-station/mobile-solar-power-station.component';
import { CapstoneDesignProjectComponent } from './capstone-design-project/capstone-design-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ErsteComponent,
    AboutPageComponent,
    HobbiesPageComponent,
    SnakeGameComponent,
    ProjectsPageComponent,
    ZweiteComponent,
    TechScreenManagementComponent,
    RevatureSocialNetworkComponent,
    ExpenseReimbursementSystemComponent,
    MobileSolarPowerStationComponent,
    CapstoneDesignProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
