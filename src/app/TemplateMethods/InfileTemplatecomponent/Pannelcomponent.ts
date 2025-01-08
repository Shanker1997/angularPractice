import {Component } from '@angular/core'
@Component({
    // the selector named here is used as tag in the html template in the parent it is used for connection /nesting

    selector:"topPannel",

    // From angular 17 every component defined should be defined as standalone key in angular..... 

    standalone:true,

    // Infile Methods of Writing html content for templates in angular -----------
    // By this we can write content of html in multiple lines-----------

    // template:`<h1>Pannel One Container</h1> 
    // <p> This content is written by using template key word using dynamic string `,
    template:'<h1> The header of in line template string ...</h1>',



    // Inline Methods of styling a template in angluar ----------------------------------


    // This is one method applying styles to the template by this way we should every thing in single line 

    //styles:"h1{color:blue}"  

    // this is another method of inline styling in anglular  by this we can write content in multiple line but it should be a string
    styles:`h1{
    color:green;
    background:grey;
    margin:'10px'
    }
    p{
    font-weight:800}`
    
})

// The class exported here is used to import it the import array where we will be using it
export class topPannel{
    
}