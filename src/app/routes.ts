import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { ProgramsComponent } from './programs/programs.component';
// import { TextEditorComponent } from './text-editor/text-editor.component';

const routeConfig: Routes = [
    {
        path: '',
        component: ProgramsComponent,
        title: 'Home page'
    }
//     {
//         path: 'programs',
//         component: ProgramsComponent,
//         title: 'Programs page'
//     },
//     {
//         path: 'texteditor',
//         component: TextEditorComponent,
//         title: 'Text Editor'
//     }
];

export default routeConfig;
