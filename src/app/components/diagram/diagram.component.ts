import { Component, OnInit, AfterViewInit } from '@angular/core'
import * as go from 'gojs'

import { CascadeService } from '../../services/cascade/cascade.service'

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit, AfterViewInit {

  constructor(private cascadeService: CascadeService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let _this = this

    function initgraph() {


    }
  }
}
