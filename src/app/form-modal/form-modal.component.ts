import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './../api.service';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})
export class FormModalComponent {

  typeFields: any = ['Texto', 'Inteiro', 'Array', 'Flutuante'];
  items: any = [];
  contentItem: string = "";

  @Input()id: number;
  formCreateField: FormGroup;
  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder,
   private apiService: ApiService
  ) {
    this.createForm();
  }
  private createForm() {
    this.formCreateField = this.formBuilder.group({
      nameField: ['', Validators.required],
      typeField: ['', Validators.required],
      writingFree: [false],
      canMultipleSelect: [false],
      item: [this.contentItem],
      collectionItems: [this.items]
    });
  }

  addItem(){
    if(this.formCreateField.value.item === null) return;
    this.items.push(this.formCreateField.value.item);
    this.contentItem = null
  }

  private submitForm() {
    let formObject = this.formCreateField.getRawValue();
    delete formObject.item;
    alert(JSON.stringify(this.formCreateField.value));
    this.formCreateField.reset();
    this.items.length = 0; //zerar o items

    // this.apiService.createFormField(this.formCreateField.value).subscribe( (response) => {
    //   console.log(response);

    // })

  }
}