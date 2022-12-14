import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { Map } from 'src/app/types/map.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data!: Map[];
  @ContentChild('tableMethods') tableMethods!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
