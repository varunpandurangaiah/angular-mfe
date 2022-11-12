import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IBlock } from '../../../interfaces/block.interface';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.css'],
})
export class ButtonBlockComponent implements OnInit, OnChanges {
  _data: IBlock;
  enableTimelineSlider = false;

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
    console.log('--ngOnInit-ButtonBlockComponent--', this._data);
    this.styles = this._data.attribute;
  }

  // This is not firing when `updateComponentData` is called
  ngOnChanges(changes: SimpleChanges) {
    console.log('--ngOnChanges-ButtonBlockComponent--', this._data);
    this.styles = this._data.attribute;
  }

  test(testData: any) {
    console.log(testData);
    console.log(this.enableTimelineSlider);
    console.log('Direct Call Test');
  }
}
