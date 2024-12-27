import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/about/team/team.component';
import { HistoryComponent } from './components/about/history/history.component';
import { UserdetailsComponent } from './components/home/userdetails/userdetails.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user/:id', component: UserdetailsComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'about', component: AboutComponent, children: [
            { path: 'team', component: TeamComponent },
            { path: 'history', component: HistoryComponent }
        ]
    },
];
