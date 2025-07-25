import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index';
import { CreateComponent } from './post/create/create';
import { EditComponent } from './post/edit/edit';
import { ViewComponent } from './post/view/view';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: IndexComponent },
  { path: 'posts/create', component: CreateComponent },
  { path: 'posts/:id/edit', component: EditComponent },
  { path: 'posts/:id/view', component: ViewComponent },
];
