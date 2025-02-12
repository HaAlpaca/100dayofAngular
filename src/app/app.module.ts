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
import { Input2Component } from './d7/input2/input2.component';
import { TodoListComponent } from './d8/todo-list/todo-list.component';
import { TodoDetailsComponent } from './d8/todo-details/todo-details.component';
import { SizerComponent } from './d9/sizer/sizer.component';
import { TabsComponent } from './d14/tabs/tabs.component';
import { TabBsGroupComponent } from './d16/tab-bs-group/tab-bs-group.component';
import { CounterComponent } from './d17/counter/counter.component';
import { TabPanelDirective } from './d16/tab-panel.directive';
import { PipeComponent } from './d18/pipe/pipe.component';
import { FormatAddressPipe } from './d18/format-address.pipe';
import { AdultCheckingPipe } from './d18/adult-checking.pipe';
import { RxjsConceptsComponent } from './d19/rxjs-concepts/rxjs-concepts.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NgIfComponent,
    NgForComponent,
    ClassStyleBindingComponent,
    InputBindingComponent,
    OutputBindingComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    CustomTwowaydatabindingComponent,
    ToggleComponent,
    FlexComponent,
    CardComponent,
    TabGroupComponent,
    TabPanelComponent,
    Input2Component,
    TodoListComponent,
    TodoDetailsComponent,
    SizerComponent,
    TabsComponent,
    TabBsGroupComponent,
    CounterComponent,
    TabPanelDirective,
    PipeComponent,
    FormatAddressPipe,
    AdultCheckingPipe,
    RxjsConceptsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
