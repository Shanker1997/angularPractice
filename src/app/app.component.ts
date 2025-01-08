import { Component } from '@angular/core';
import { ExternalTemplate } from './TemplateMethods/ExtenalFileTemplate/ExtrnalFileTemplate';
import { EventAndstyleBindingComponent } from './event-andstyle-binding/event-andstyle-binding.component';

@Component({
  selector: 'app-root',
  imports: [ExternalTemplate,EventAndstyleBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angluarpractice';
}
