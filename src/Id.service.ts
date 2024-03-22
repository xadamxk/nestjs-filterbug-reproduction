import { Injectable } from '@nestjs/common';

@Injectable()
export class IdService {

  constructor() {}

  public getId(): string {
    return new Date().getTime().toString();
  }
}
