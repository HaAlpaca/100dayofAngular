import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './d1/hello/hello.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './d4/ng-if/ng-if.component';
import { NgForComponent } from './d5/ng-for/ng-for.component';
import { ClassStyleBindingComponent } from './d6/class-style-binding/class-style-binding.component';
import { InputBindingComponent } from './d7/input-binding/input-binding.component';
import { OutputBindingComponent } from './d7/output-binding/output-binding.component';
import { AuthorListComponent } from './d7/author-list/author-list.component';
import { AuthorDetailsComponent } from './d7/author-details/author-details.component';
import { CustomTwowaydatabindingComponent } from './d9/custom-twowaydatabinding/custom-twowaydatabinding.component';
import { ToggleComponent } from './d9/toggle/toggle.component';
import { FlexComponent } from './d12/flex/flex.component';
import { CardComponent } from './card/card.component';
import { TabGroupComponent } from './d16/tab-group/tab-group.component';
import { TabPanelComponent } from './d16/tab-panel/tab-panel.component';
@NgModule({
  declarations: [AppComponent, HelloComponent, NgIfComponent, NgForComponent, ClassStyleBindingComponent, InputBindingComponent, OutputBindingComponent, AuthorListComponent, AuthorDetailsComponent, CustomTwowaydatabindingComponent, ToggleComponent, FlexComponent, CardComponent, TabGroupComponent, TabPanelComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
