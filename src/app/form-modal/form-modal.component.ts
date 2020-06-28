import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html'
})
export class FormModalComponent {

  typeFields: any = ['Texto', 'Inteiro', 'Array', 'Flutuante'];
  items: any = [];

  @Input()id: number;
  formCreateField: FormGroup;
  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.formCreateField = this.formBuilder.group({
      nameField: ['', Validators.required],
      typeField: ['', Validators.required],
      writingFree: [false, Validators.required],
      canMultipleSelect: [false, Validators.required],
      item: [this.items, Validators.required]
    });
  }

  addItem(){
    this.items.push(this.formCreateField.value.item);
    console.log(this.formCreateField.get('item'));
    this.formCreateField.reset('item');
  }

  private submitForm() {
    // this.activeModal.close(this.formCreateField.value);
    alert(JSON.stringify(this.formCreateField.value));
    this.formCreateField.reset();
  }
}