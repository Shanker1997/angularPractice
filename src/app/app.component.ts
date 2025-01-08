import { Component } from '@angular/core';
import { ExternalTemplate } from './TemplateMethods/ExtenalFileTemplate/ExtrnalFileTemplate';

@Component({
  selector: 'app-root',
  imports: [ExternalTemplate],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angluarpractice';
}
