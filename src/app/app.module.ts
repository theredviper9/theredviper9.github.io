import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatDialog} from '@angular/material';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { DialogComponent } from './dialog/dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    NavComponent,
    FormComponent,
    DialogComponent,
    MyDialogComponent,
    MenudemoComponent,
    SidenavdemoComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
