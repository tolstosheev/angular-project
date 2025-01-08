import { Component } from '@angular/core';
import {MatFormField, MatPrefix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from '@angular/material/input';
import {MatIconButton, MatMiniFabButton} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatIconButton,
    MatMiniFabButton,
    MatPrefix
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
