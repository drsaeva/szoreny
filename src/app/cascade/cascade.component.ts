import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-cascade',
  templateUrl: './cascade.component.html',
  styleUrls: ['./cascade.component.scss']
})
export class CascadeComponent implements OnInit {
  name = 'Angular 5';
  hierarchialGraph = {nodes: [], links: []};
  curve = shape.curveBundle.beta(1);

  constructor() { }

  ngOnInit(): void {
    this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [
    {
      id: 'start',
      label: 'scan',
      position: 'x0'
    }, {
      id: '1',
      label: 'Eventa',
      position: 'x1'
    }, {
      id: '2',
      label: 'Eventx',
      position: 'x2'
    }, {
      id: '3',
      label: 'Eventb',
      position: 'x3'
    }, {
      id: '4',
      label: 'Eventc',
      position: 'x4'
    }, {
      id: '5',
      label: 'Eventy',
      position: 'x5'
    }, {
      id: '6',
      label: 'Eventz',
      position: 'x6'
    }
    ];

    this.hierarchialGraph.links = [
    {
      source: 'start',
      target: '1',
      label: 'Process1'
    }, {
      source: 'start',
      target: '2',
      label: 'Process2'
    }, {
      source: '1',
      target: '3',
      label: 'Process3'
    }, {
      source: '2',
      target: '4',
      label: 'Process4'
    }, {
      source: '2',
      target: '6',
      label: 'Process6'
    }, {
      source: '3',
      target: '5'
    }
    ];
  }
}
