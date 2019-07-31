import { Component, OnInit } from '@angular/core';
import { NameService } from '../../core/services/name.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name: string;
  constructor(private nameService: NameService) { }

  ngOnInit() {
   this.name = this.nameService.getName('Denver');
  }

}