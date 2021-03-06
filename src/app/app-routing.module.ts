import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'painel-aluno', component: PainelAlunoComponent },
  { path: 'painel-professor', component: PainelProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
