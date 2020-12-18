import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ZweiteComponent } from './zweite/zweite.component';
import { TechScreenManagementComponent } from './tech-screen-management/tech-screen-management.component';
import { RevatureSocialNetworkComponent } from './revature-social-network/revature-social-network.component';
import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system/expense-reimbursement-system.component';
import { MobileSolarPowerStationComponent } from './mobile-solar-power-station/mobile-solar-power-station.component';
import { CapstoneDesignProjectComponent } from './capstone-design-project/capstone-design-project.component'
const routes: Routes = [
	{
		path: 'about', component: AboutPageComponent
		
	},
	{
		path: 'hobbies', component: HobbiesPageComponent
	},
	{
		path: 'projects', component: ProjectsPageComponent
	},
	{
		path: 'zweite', component: ZweiteComponent,
		children: 
		[
			{
				path: 'tsm', component: TechScreenManagementComponent 
			},
			{
				path: 'rsn', component: RevatureSocialNetworkComponent
			},
			{
				path: 'ers', component: ExpenseReimbursementSystemComponent
			},
			{
				path: 'msps', component: MobileSolarPowerStationComponent
			},
			{
				path: 'cdp', component: CapstoneDesignProjectComponent
			}
		]
	},
	{
		path: '**', redirectTo: 'zweite'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
