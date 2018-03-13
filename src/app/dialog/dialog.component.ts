import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  //dialogResult: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      //this.dialogResult = result;
    });
  }

}
