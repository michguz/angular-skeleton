import { Component } from '@angular/core';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [EditorComponent],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css',
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class TextEditorComponent {
  init: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    base_url: '/timymce',
    suffix: '.min'
  };

}
