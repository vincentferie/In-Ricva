import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'src/app/common-table/table/public-api';
import { apis } from 'src/app/interface/interface';
import { ButtonComponent } from 'src/app/shared/button.component';

@Component({
  selector: 'app-pottingplan',
  templateUrl: './pottingplan.component.html',
  styleUrls: ['./pottingplan.component.scss']
})
export class PottingplanComponent implements OnInit {

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
  addBtnName: string = "Créer un plan d'empotage";
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
        finhe: '00001925',
        Spéculation: '208516694',
        Date_de_déchargement: '02',
        Superviseur: '3',
        Provenance: 'KAMES SERVICES',
        Entrepot: 'BASSAM DIAOUNE 3',
        Statut: '1',
        Transitaire:'DUVICK ETS',
        _id: '0000192595874123'
      },
      {
        finhe: '00001925',
        Spéculation: '208516694',
        Date_de_déchargement: '02',
        Superviseur: '3',
        Provenance: 'KAMES SERVICES',
        Entrepot: 'BASSAM DIAOUNE 3',
        Statut: '1',
        Transitaire:'KAMES SERVICES',
        _id: '0000192595874123'
      },
      {
        finhe: '00001925',
        Spéculation: '208516694',
        Date_de_déchargement: '02',
        Superviseur: '3',
        Provenance: 'KAMES SERVICES',
        Entrepot: 'BASSAM DIAOUNE 3',
        Statut: '1',
        Transitaire:'MANTRA',
        _id: '0000192595874123'
      },
      {
        finhe: '00001925',
        Spéculation: '208516694',
        Date_de_déchargement: '02',
        Superviseur: '3',
        Provenance: 'KAMES SERVICES',
        Entrepot: 'BASSAM DIAOUNE 3',
        Statut: '1',
        Transitaire:'DUVICK ETS',
        _id: '0000192595874123'
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
          title: 'Premium',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Spéculation: {
          title: 'Booking',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Date_de_déchargement: {
          title: 'Qualité',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Superviseur: {
          title: 'Discompte',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Provenance: {
          title: 'Transitaire',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Entrepot: {
          title: 'Entrepot',
          filter: true,
          valuePrepareFunction: value => {
            return value;
          }
        },
        Transitaire: {
          title: 'Transitaire',
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
