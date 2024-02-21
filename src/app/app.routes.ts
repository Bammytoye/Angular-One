import { Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TemplayeformComponent } from './templayeform/templayeform.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { studentGuardGuard } from './student-guard.guard';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { ReactiveformComponent} from './reactiveform/reactiveform.component';
import { FirstNavBarComponent } from './FirstNavBar/FirstNavBar.component';
import { BehaviourSubjectParentComponent } from './behaviour-subject-parent/behaviour-subject-parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventParentComponent } from './event-parent/event-parent.component';

export const routes: Routes = [
    {path: '', component: FirstNavBarComponent},
    {path: 'contact', component: ContactAppComponent},
    {path: 'Pipe', component: PipeComponent},
    {path: 'event', component: EventParentComponent},
    {path: 'service', component: ServicecomponentComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'templateForm', component: TemplayeformComponent},
    {path: 'reactiveform', component: ReactiveformComponent},
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'Behaviour', component: BehaviourSubjectParentComponent},
    {path: 'display/index', component: DisplayContactComponent},

    {path: 'dashboard', children: [
        {path: '', component:DashBoardComponent},
        {path: 'setting', component:SettingComponent},
    ], canActivate:[studentGuardGuard]},

    {path: 'edit/:index', component: ViewContactComponent},
    {path: '**', component:ErrorPageComponent}
];
