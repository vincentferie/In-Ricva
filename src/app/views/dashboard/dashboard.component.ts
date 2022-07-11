import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {Chart,registerables }  from 'chart.js';
//https://www.chartjs.org/docs/latest/charts/line.html


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit,OnInit {
  @ViewChild('FirstChart', { static: false }) private chartRef: ElementRef;
  @ViewChild('secondChart', { static: false }) private secchartRef: ElementRef;
  @ViewChild('thirdChart', { static: false }) private thirdchartRef: ElementRef;



  chartone: any;
  charttwo: any;
  chartthree:any;

  
  constructor(
  ) {
    Chart.register(...registerables)
    
  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    const labels =  [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    console.log(this.chartRef.nativeElement);
    this.chartone = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: data
    })
    this.charttwo = new Chart(this.secchartRef.nativeElement, {
      type: 'line',
      data: data
    })
    const thirddata = {
      labels: [
        'Lorem 01',
        'Lorem 01',
        'Lorem 01'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 137, 24)',
          'rgb(30, 191, 194)',
          'rgb(4, 115, 189)'
        ],
        hoverOffset: 4
      }]
    };
    this.chartthree = new Chart(this.thirdchartRef.nativeElement, {
      type: 'doughnut',
      data: thirddata
    })
  }
  

}
