import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'child-a',
        component: ChildaComponent,
      },
      {
        path: 'child-b',
        component: ChildbComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
