import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Network, Options } from 'vis'

import { Cascade } from '../../models/cascade.interface'
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
  cascade: Cascade
  graph: Network
  readonly options: Options = {}
  readonly container: HTMLElement = document.getElementById('cascade')

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cascade = this.route.snapshot.data.cascade
    this.graph = new Network(this.container, this.cascade, this.options)
  }

}
