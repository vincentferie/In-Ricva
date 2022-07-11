import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'src/app/common-table/table/public-api';
import { apis } from 'src/app/interface/interface';
import { ButtonComponent } from 'src/app/shared/button.component';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.scss']
})
export class ExecutionComponent implements OnInit {

  settings: any;
  source: LocalDataSource = new LocalDataSource();
  skip: number = 0;
  limit: number = 10;
  count: number = 0;
  default_limit: number = 10;
  bulk_action: boolean = true;
  add_btn: boolean = true;
  export_btn: boolean = true;
  delete_btn: boolean = true;
  addBtnUrl: string = '/app/lot-management/storage-add';
  addBtnName: string = 'Crée une exécution';
  editUrl: string = '/app/lot-management/storage-edit/';
  deleteApis: apis;
  card_details: any[] = [];
  global_status: number = 0;
  global_search: string;
  global_filter: string;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {
    this.loadsettings('');
  }

  ngOnInit(): void {
    var data = {
      'skip': this.skip,
      'limit': this.default_limit,
      'status': this.global_status,
      'search': this.global_search,
      'filter': this.global_filter
    };
    this.getUserList(data);
  };

  getUserList(data) {
    var dateList = [
      {
        finhe: 'Plan 01',
        Spéculation: '2',
        Date_de_déchargement: '4',
        Superviseur: 'Abou Keita',
        Provenance: 'Daoukro',
        Entrepot: 'SONAT',
        Statut: '1',
        _id: 'Plan 0195874123'
      },
      {
        finhe: 'Plan 02',
        Spéculation: '2',
        Date_de_déchargement: '4',
        Superviseur: 'Abou Keita',
        Provenance: 'Daoukro',
        Entrepot: 'SONAT',
        Statut: '1',
        _id: 'Plan 0195872123'
      },
      {
        finhe: 'Plan 03',
        Spéculation: '2',
        Date_de_déchargement: '4',
        Superviseur: 'Abou Keita',
        Provenance: 'Daoukro',
        Entrepot: 'SONAT',
        Statut: '1',
        _id: 'Plan0195874133'
      },
      {
        finhe: 'Plan 04',
        Spéculation: '2',
        Date_de_déchargement: '4',
        Superviseur: 'Abou Keita',
        Provenance: 'Daoukro',
        Entrepot: 'SONAT',
        Statut: '1',
        _id: 'Plan0195874103'
      },
    ];
    this.source.load(dateList);
    this.count = dateList.length;
    this.cd.detectChanges();
  }

  onDeleteChange(event) {
    if (event && event.status == 1) {
      this.skip = 0;
      this.ngOnInit();
    }
  };

  onSearchChange(event) {
    this.source = new LocalDataSource();
    this.global_search = event;
    let data = {
      'skip': this.skip,
      'limit': this.limit,
      'status': this.global_status,
      'search': event,
      'filter': this.global_filter
    }
    this.getUserList(data);
  };

  onitemsPerPageChange(event) {
    this.limit = event;
    this.skip = 0;
    this.default_limit = event;
    this.source = new LocalDataSource();
    let data = {
      'skip': this.skip,
      'limit': this.limit,
      'status': this.global_status,
      'search': this.global_search,
      'filter': this.global_filter
    }
    this.getUserList(data);
  };
  onPageChange(event) {
    this.skip = this.limit * (event - 1);
    this.source = new LocalDataSource();
    let data = {
      'skip': this.limit * (event - 1),
      'limit': this.limit,
      'status': this.global_status,
      'search': this.global_search,
      'filter': this.global_filter
    };
    this.getUserList(data);
  }

  onheaderCardChange(event) {
    this.skip = 0;
    this.source = new LocalDataSource();
    let data = {
      'skip': this.skip,
      'limit': this.limit,
      'status': this.global_status,
      'search': this.global_search,
      'filter': this.global_filter
    }
    if (event == 'all') {
      data.status = 0;
      this.global_status = 0;
    } else if (event == 'active') {
      data.status = 1;
      this.global_status = 1;
    } else if (event == 'inactive') {
      data.status = 2;
      this.global_status = 2;
    } else if (event == 'delete') {
      data.status = 4;
      this.global_status = 4;
    } else if (event == 'today') {
      data.status = 5;
      this.global_status = 5;
    }
    this.loadsettings(event);
    this.getUserList(data);
  }
  loadsettings(event) {
    this.settings = {
      // selectMode: 'multi',
      hideSubHeader: true,
      columns: {
        finhe: {
          title: "Plan d'empotage",
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Spéculation: {
          title: 'Nombre de conteneurs',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Date_de_déchargement: {
          title: 'Nombre de lot',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Statut: {
          title: 'Statut',
          filter: false,
          type: "custom",
          renderComponent: ButtonComponent,
          sort: false,
          editable: true,
          onComponentInitFunction: (instance: any) => {
            instance.save.subscribe(row => {
              console.log(row);
            });
          }
        },
      },
      pager: {
        display: true,
        perPage: this.default_limit
      },
      actions: {
        add: true,
        edit: false,
        delete: false,
        columnTitle: 'Actions',
        class: 'action-column',
        position: 'right',
        custom: [
          {
            name: 'deleteaction',
            value: 'Delete',
            title: '<div class="action-btn btn btn-danger delete-btn-custom mb-1"><i class="fa fa-trash"></i></div>',
            type: 'html',
          },
          {
            name: 'editaction',
            value: 'Edit',
            type: 'html',
            title: '<div class="btn btn-default mb-1"><i class="fa fa-angle-right"></i></div>',
          }
        ],
      },
    }
  };

};
