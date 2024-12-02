import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SettoreMateriaRoutingModule } from './settore-materia-routing.module';
import { SettoreMateriaComponent } from './settore-materia.component';
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
    declarations: [
        SettoreMateriaComponent
    ],
    imports: [
        CommonModule,
        SettoreMateriaRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class SettoreMateriaModule { }
