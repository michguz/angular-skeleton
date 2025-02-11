import { Component } from '@angular/core';
import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-text-editor',
  imports: [EditorModule, EditorComponent],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  editorValue: string = '';

  editorConfig = {
    height: 500,
    menubar: false,
    plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'print', 'preview', 'searchreplace', 'wordcount'],
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | outdent indent | link image',
    base_url: '/tinymce',
    suffix: '.min'
  };
}
