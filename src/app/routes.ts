import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { ProgramsComponent } from './programs/programs.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

const routeConfig: Routes = [
    {
        path: '',
        component: ProgramsComponent,
        title: 'Home page'
    },
    {
        path: 'texteditor',
        component: TextEditorComponent,
        title: 'Text Editor sample'
    },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        title: 'Bootstrap sample'
    }
];

export default routeConfig;
