import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonFinderComponent } from './pokemon-finder.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PokemonFinderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    PokemonFinderComponent
  ]
})
export class PokemonFinderModule { }
