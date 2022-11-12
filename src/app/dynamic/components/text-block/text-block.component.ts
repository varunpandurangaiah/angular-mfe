import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IBlock } from '../../../interfaces/block.interface';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css'],
})
export class TextBlockComponent implements OnInit, OnChanges {
  _data: IBlock;

  @Input() set data(d: IBlock) {
    this._data = { ...d };
  }

  get data() {
    return this._data;
  }

  styles: Record<string, string>;

  constructor() {}

  // Fired first time on component mount
  ngOnInit() {
    console.log('--ngOnInit-TextBlockComponent--', this._data);
    this.styles = this._data.attribute;
  }

  // This is not firing when `updateComponentData` is called
  ngOnChanges(changes: SimpleChanges) {
    console.log('--ngOnChanges-TextBlockComponent--', this._data);
    this.styles = this._data.attribute;
  }
}
