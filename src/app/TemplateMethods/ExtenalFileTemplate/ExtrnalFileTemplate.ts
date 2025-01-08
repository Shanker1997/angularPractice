import { Component } from "@angular/core";
import { topPannel } from "../InfileTemplatecomponent/Pannelcomponent";
@Component({
    selector:"exteralTemplate",
    standalone:true,
    // This is the method to link extenal template file in angular component
    templateUrl:'./ExternalTemplate.html',
     // This is the method to link extenal styles file in angular component
    styleUrl:'./Styles.scss',
    imports:[topPannel]
})
export class ExternalTemplate{
    
}