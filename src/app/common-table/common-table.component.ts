import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { apis } from '../interface/interface';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  @Input() settings: any;
  @Input() source: any;
  @Input() count: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() itemOptionsPerPage = [5, 10, 50, 100];
  @Input() tablename: string = '';
  @Input() add_btn: boolean = false;
  @Input() export_btn: boolean = false;
  @Input() addBtnUrl: string = '/';
  @Input() addBtnName: string = '';
  @Input() editUrl: string = '';
  @Input() viewUrl: string = '';
  @Input() deleteApis: apis;
  @Input() card_details: any[] = [];
  @Input() showSearch = true;
  @Input() bulk_action: boolean = false;
  @Input() exportApis: apis;
  @Input() restoreApis: apis;
  @Input() cardActive: string;


  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onitemsPerPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteChange: EventEmitter<any> = new EventEmitter();
  @Output() onheaderCardChange: EventEmitter<any> = new EventEmitter();
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter();


  currentPerPage: number = 1;
  seletedRow = [];
  bulkactions: string = '';
  bulkSelect: boolean = false;
  username: string = '';
  password: string = '';
  restoreData: any;
  forcedelete: boolean = false;
  isCollapsed = true;
  filterForm: UntypedFormGroup
  categoryList: any[] = [];
  @ViewChild('deleteModal', { static: false }) deleteModal: ModalDirective;
  @ViewChild('restoreModal', { static: false }) restoreModal: ModalDirective;

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
  };

  customClassAdd(length) {
    if (length == 3 || length == 4) {
      return 'col-sm-4 col-lg-3'
    } else if (length == 5) {
      return 'custom-class-col-5'
    } else if (length == 6) {
      return 'custom-class-col-6'
    } else if (length == 7) {
      return 'custom-class-col-7'
    }
  }
  onCustomAction(event) {
    if (event.action == 'editaction') {
      if (this.editUrl != '') {
        this.router.navigate([this.editUrl, event.data._id]);
      }
    } else if (event.action == 'deleteaction') {
      this.seletedRow = [event.data];
      this.deleteModal.show();
    } else if (event.action == 'viewaction') {
      if (this.viewUrl != '') {
        this.router.navigate([this.viewUrl, event.data._id]);
      }
    } else if (event.action == 'restoreaction') {
      this.restoreModal.show();
      this.restoreData = event.data;
    } else if (event.action == 'forcedeleteaction') {
      this.deleteModal.show();
      this.forcedelete = true;
      this.seletedRow = [event.data];
    }
  };

  headercardfun(event) {
    this.currentPerPage = 1;
    this.onheaderCardChange.emit(event);
    this.cardActive = event;
  }
  rowclickaction(event) {
    if (this.editUrl != '') {
      // this.router.navigate([this.editUrl, event.data._id]);
    }
  }

  Pagechange(event) {
    if (event && typeof event.page != 'undefined') {
      this.currentPerPage = event.page;
      this.onPageChange.emit(event.page);
    }
  }

  PerPagechange(event) {
    if (event && event.pagingConf && event.pagingConf.perPage) {
      this.currentPerPage = 1;
      this.onitemsPerPageChange.emit(event.pagingConf.perPage);
    }
  }

  onUserRowSelect(event) {
    this.seletedRow = event.selected;
    if (event.selected && event.selected.length > 1) {
      this.bulkSelect = true;
    } else {
      this.bulkSelect = false;
    }
    // this.deleteModal.show();
  }
  timer = null;
  onSearchKeyUp(event) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.currentPerPage = 1;
      this.onSearchChange.emit(event);
    }, 1000);
  };


  confirm() {
    if (this.bulkSelect) {
      if (this.username == '' && this.password == '') {
        console.log('Please enter Username and Password');
        return;
      }
    };
    var data = this.seletedRow.map(x => x._id);
  };

  confirmRestore() {
    if (this.restoreData && this.restoreData._id) {
    }
  }
}
