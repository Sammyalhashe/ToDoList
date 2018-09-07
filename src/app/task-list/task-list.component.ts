import {Component, Inject, OnInit} from '@angular/core';
import { Itask } from '../Shared/Itask';
import { TaskService } from './tasks.service';
import { animationsList } from './task-list.animations';

import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';


export interface DialogData {
    task: string;
    priority: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: animationsList
})
export class TaskListComponent implements OnInit {
  newTask: string;
  newPriority: string;
  serverResponse: any;
  taskAdding: boolean;
  tasks: Itask[];

  constructor(private task: TaskService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.tasks = [];
      this.newTask = '';
      this.newPriority = '';
    this.task.getTasks().subscribe(data => {
      data.forEach(task => {
        console.log(task);
          this.tasks.push(task);
      });
    });
  }

  addTask(event) {
    this.taskAdding = true;
  }

  submitNewTask(event) {
    this.taskAdding = false;

    this.task.addTask(this.newTask, this.newPriority).subscribe(resp => {
      console.log(resp);
      this.tasks.push(resp);
        this.openSnackBar('add', resp.id);
    });
  }

  deleteTask(event, id: string) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks.splice(i, 1);
      }
    }
    this.task.deleteTask(id).subscribe(data => {
      console.log(data);
        this.openSnackBar('delete', id);
    });
  }

  editTask(event, id: string) {
    let taskRef: Itask;
    console.log(this.tasks);
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
          if (task['id'] === id) {
              taskRef = this.tasks[i];
          }
      }
      const dialogRef = this.dialog.open(EditDialogComponent, {
          width: '500px',
          data: {task: taskRef.task, priority: taskRef.priority}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
          if (result) {
              taskRef.task = result[0];
              taskRef.priority = result[1];
              this.task.updateTask(id, result[0], result[1]).subscribe(resp =>{
                console.log(resp);
              });
              this.openSnackBar('edit', id);
          }
      });
  }

    openSnackBar(task: string, ...args: any[]) {
        let message: string;
        if (task === 'edit') {
          message = `Task ${args[0]} edited`;
        }

        if (task === 'delete') {
          message = `Task ${args[0]} deleted`;
        }

        if (task === 'add') {
            message = `Task ${args[0]} added`;
        }

        this.snackBar.open(message, null, {
            duration: 2000,
        });
    }
}


@Component({
    selector: 'app-edit-dialog',
    template: `
        <div class="container">
          <div class="row">
              <div class="example-container col-md-10 col-md-offset-5">
                  <mat-form-field>
                      <input [(ngModel)]="data.task" matInput placeholder="Task">
                  </mat-form-field>
  
                  <mat-form-field>
                      <input [(ngModel)]="data.priority" matInput placeholder="Priority">
                  </mat-form-field>
              </div>
          </div>
            <div mat-dialog-actions>
                <button mat-button color="warn" (click)="onNoClick()">Cancel</button>
                <button mat-button color="primary" [mat-dialog-close]="[data.task, data.priority]" cdkFocusInitial>Update</button>
            </div>
        </div>
    `,
})
export class EditDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<EditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
