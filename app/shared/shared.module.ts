import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { starComponent } from './star.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        starComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        starComponent
    ]
})

export class SharedModule{
    
}