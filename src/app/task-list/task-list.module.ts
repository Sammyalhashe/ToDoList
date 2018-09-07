import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditDialogComponent, TaskListComponent} from './task-list.component';
import { TaskService } from './tasks.service';
import { AngularMaterialModule } from '../AngularMaterial/angularmaterial.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  declarations: [TaskListComponent, EditDialogComponent],
    entryComponents: [EditDialogComponent],
  providers: [TaskService]
})
export class TaskListModule {}
