import { Controller, Get } from '@nestjs/common';
import { ForbiddenException } from '../forbidden.exception';

@Controller()
export class TestController {
    @Get()
    test() {
        throw new ForbiddenException();
        return "should not reach here";
    }
}
