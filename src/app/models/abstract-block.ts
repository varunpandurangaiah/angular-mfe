import { IBlock } from '../interfaces/block.interface';
import { v4 as uuidv4 } from 'uuid';

export abstract class AbstractBlock implements IBlock {
  id: string;
  type: string;
  data: any;
  attribute: Record<string, string>;

  constructor(data: Partial<IBlock>) {
    if (!data.id) {
      this.id = uuidv4();
    }
  }
}
