import { Routes } from '@angular/router';
import { TextEditorComponent } from './text-editor/text-editor.component'

const routeConfig: Routes = [
    {
        path: '',
        component: TextEditorComponent,
        title: 'Text Editor'
    }
];

export default routeConfig;

// export const routes: Routes = [];