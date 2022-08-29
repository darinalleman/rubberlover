import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext'
import {DropdownModule} from 'primeng/dropdown';
import { TireTableComponent } from './tire-table/tire-table.component';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTireDialogComponent } from './create-tire-dialog/create-tire-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ChipsModule} from 'primeng/chips';
import {DividerModule} from 'primeng/divider';
import {MultiSelectModule } from 'primeng/multiselect';
import { TireTypePipe } from './tire-table/tire-type.pipe/tire-type.pipe'
import {TooltipModule} from 'primeng/tooltip';
import { ToPrettyUrlPipe } from './tire-table/to-pretty-url.pipe/to-pretty-url.pipe';
import { ToSelectedUnitsPipe } from './tire-table/to-selected-units.pipe/to-selected-units.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    TireTableComponent,
    CreateTireDialogComponent,
    TireTypePipe,
    ToPrettyUrlPipe,
    ToSelectedUnitsPipe
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ChipsModule,
    DividerModule,
    MultiSelectModule,
    TooltipModule
  ],
  providers: [
    MessageService
  ]
})
export class HomeModule { }
