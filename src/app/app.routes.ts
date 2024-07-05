import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EscolhaComponent } from './components/escolha.component';
import { HomeComponent } from './components/home.component';
import { PdfComponent } from './components/pdf.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'escolha',
        component: EscolhaComponent
    },
    {
        path: 'pdf',
        component: PdfComponent
    }
];
