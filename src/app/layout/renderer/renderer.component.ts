import { Component, OnInit } from '@angular/core';
import { IBlock } from '../../interfaces/block.interface';
import { ButtonBlock } from '../../models/button';
import { TextBlock } from '../../models/text';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RendererComponent implements OnInit {
  currentData: IBlock;

  constructor() {}

  ngOnInit() {
    this.mountButton();
  }

  mountButton() {
    this.currentData = new ButtonBlock({
      type: 'button',
      data: 'Button text',
      attribute: {
        color: 'red',
      },
    });
  }

  mountText() {
    this.currentData = new TextBlock({
      type: 'text',
      data: 'Hello world',
      attribute: {
        color: 'green',
      },
    });
  }

  updateData() {
    this.currentData.data = `Updated ${this.currentData.type}`;
    this.currentData.attribute = { color: 'yellow' };
    const data = { ...this.currentData };

    this.currentData = { ...data };
  }
}
