import { StarComponent } from "../shared/star.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
    StarComponent
    ],

    imports: [
      FormsModule,CommonModule
    ],
   
    exports : [
        FormsModule,
        CommonModule,
        StarComponent

    ]
    
  })
  export class SharedModule { }
  