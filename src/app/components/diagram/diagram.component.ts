import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Network } from 'vis'

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  graph: Network;

  constructor() {
  }

  ngOnInit() {
  }

}
