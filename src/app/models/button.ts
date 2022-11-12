import { IBlock } from '../interfaces/block.interface';
import { AbstractBlock } from './abstract-block';

export class ButtonBlock extends AbstractBlock {
  constructor(data: Partial<IBlock>) {
    super(data);

    Object.assign(this, data);
  }
}
