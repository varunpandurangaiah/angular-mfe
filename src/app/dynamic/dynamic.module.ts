import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';
import { ButtonBlockComponent } from './components/button-block/button-block.component';
import { TextBlockComponent } from './components/text-block/text-block.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicLoaderComponent,
    ButtonBlockComponent,
    TextBlockComponent,
  ],
  exports: [DynamicLoaderComponent],
})
export class DynamicModule {}
