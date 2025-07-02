import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About Me' },
    { path: 'projects', component: ProjectsComponent, title: 'My Projects' },
    { path: 'contact', component: ContactComponent, title: 'Contact Me' },
    // Fallback route for undefined paths - can redirect to home or a 404 component later
    { path: '**', redirectTo: '/home' }
];
