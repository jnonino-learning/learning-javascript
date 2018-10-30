import {NgModule} from "@angular/core";
import {StarComponent} from "./star.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        StarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent
    ]
})

export class SharedModule {

}
