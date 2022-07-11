import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: "button-component",
    template: `
    <span>
    <button class="btn btn-success text-white status-btn" *ngIf="value && value == 1" (click)="onModelChange()">Validé</button>
    <button class="btn btn-danger text-white status-btn" *ngIf="!value || value == 0" (click)="onModelChange()">Validé</button>
    </span>
  `
})
export class ButtonComponent {
    rowData: any;
    @Input() value: any;

    @Output() save: EventEmitter<any> = new EventEmitter();

    onModelChange() {
        this.save.emit(this.rowData);
    }
}
