import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  InputModule,
  SelectModule,
  StructuredListModule,
  TableModule,
  RadioModule,
  BreadcrumbModule,
  DatePickerModule,
  AccordionModule,
  PaginationModule,
  ModalModule,
  TagModule,
  LinkModule,
  ComboBoxModule,
  ContentSwitcherModule,
  DocumentationModule,
  SearchModule,
  PlaceholderModule,
  DialogModule,
  UIShellModule,
  ProgressIndicatorModule
} from 'carbon-components-angular';

@NgModule({
 imports: [ CommonModule, ButtonModule,
  GridModule,
  InputModule,
  SelectModule,
  StructuredListModule,
  TableModule,
  RadioModule,
  BreadcrumbModule,
  DatePickerModule,
  AccordionModule,
  PaginationModule,
  ModalModule,
  TagModule,
  LinkModule,
  ComboBoxModule,
  ContentSwitcherModule,
  DocumentationModule,
  SearchModule,
  PlaceholderModule,
  DialogModule,
  UIShellModule,
  ProgressIndicatorModule ],
 exports: [
  CommonModule,
  ButtonModule,
  GridModule,
  InputModule,
  SelectModule,
  StructuredListModule,
  TableModule,
  RadioModule,
  BreadcrumbModule,
  DatePickerModule,
  AccordionModule,
  PaginationModule,
  ModalModule,
  TagModule,
  LinkModule,
  ComboBoxModule,
  ContentSwitcherModule,
  DocumentationModule,
  SearchModule,
  PlaceholderModule,
  DialogModule,
  UIShellModule,
  ProgressIndicatorModule ]
})
export class TestCarbonComponentsAngularModule { }
