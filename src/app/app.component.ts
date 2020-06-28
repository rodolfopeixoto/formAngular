import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private modalService: NgbModal) { };
  openFormModal(){
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.id = 10;


    modalRef.result.then( (result) => {
      console.log(result);
    }).catch( (error) => {
      console.log(error);
    })
  }
}
