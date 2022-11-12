import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IBlock } from '../../interfaces/block.interface';
import { ButtonBlockComponent } from '../components/button-block/button-block.component';
import { TextBlockComponent } from '../components/text-block/text-block.component';

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.css'],
})
export class DynamicLoaderComponent implements OnInit, OnChanges {
  @Input() data: IBlock;

  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  public containerRef: ViewContainerRef;

  compMaps = [
    { key: 'button', component: ButtonBlockComponent },
    { key: 'text', component: TextBlockComponent },
  ];

  public componentRef: ComponentRef<any>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const dataToUpdate = { ...this.data };

    if (this.componentRef) {
      if (this.componentRef.instance.data.type === dataToUpdate.type) {
        console.log('--update trigger--');
        this.updateComponentData(dataToUpdate);
      } else {
        console.log('--load trigger--');
        this.loadComponent(dataToUpdate);
      }
    } else {
      console.log('--load trigger--');
      this.loadComponent(dataToUpdate);
    }
  }

  /**
   * Mount component
   */
  loadComponent(data: any) {
    // Get the component to render
    const componentMap = this.compMaps.find((comp) => comp.key === data.type);

    // Clear any previous references
    this.containerRef.clear();

    if (componentMap) {
      this.componentRef = this.containerRef.createComponent(
        componentMap.component
      );
      debugger;
      // Pass data to the component
      this.componentRef.instance['data'] = { ...data };
      this.componentRef.instance.enableTimelineSlider = false;
      this.componentRef.instance.test('From Dynamic Data');
      // this.componentRef.changeDetectorRef.detectChanges();
    }
  }

  /**
   * Update data of an already mounted component
   */
  updateComponentData(data: any) {
    // Pass data to the component
    this.componentRef.instance['data'] = { ...data };

    // this.componentRef.changeDetectorRef.detectChanges();
  }
}
