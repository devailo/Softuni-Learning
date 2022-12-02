import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth-activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [

  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Login',
      loginRequired: false
    }
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Register',
      loginRequired: false
    }
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      loginRequired: true
    }
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Logout',
      loginRequired: true
    }
  }
];

export const AuthRoutingModule = RouterModule.forChild(routes);