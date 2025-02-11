import { Component } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-text-editor',
  // standalone: true,
  imports: [EditorComponent],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  init: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    // base_url: '/timymce',
    // suffix: '.min'
  };

}
