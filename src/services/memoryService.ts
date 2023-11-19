import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryService {
  private memory: string[] = [];
  addToMemory(statement: string): void {
    this.memory.push(statement);
  }

  getContextFromMemory(): string {
    return this.memory.reduce((acc, item) => (acc += ` ${item}`), '');
  }
}
