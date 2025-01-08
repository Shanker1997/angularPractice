import { Component } from '@angular/core';

@Component({
  selector: 'app-event-andstyle-binding',
  imports: [],
  templateUrl: './event-andstyle-binding.component.html',
  styleUrl: './event-andstyle-binding.component.scss'
})
export class EventAndstyleBindingComponent {
    para1:string='This component Is Created by using angular Cli '
    showcommand:boolean=false
    showCommand(){
      if(!this.showcommand){
        this.para1=" ng generate componet component name  "
        this.showcommand=true

      }
      else{
        this.para1="This component Is Created by using angular Cli"
        this.showcommand=false

      }
    }
    

}
