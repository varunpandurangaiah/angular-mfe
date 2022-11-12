import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from '../dynamic/dynamic.module';
import { RendererComponent } from './renderer/renderer.component';

@NgModule({
  imports: [CommonModule, DynamicModule],
  declarations: [RendererComponent],
  exports: [RendererComponent],
})
export class LayoutModule {}
