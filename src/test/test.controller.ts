import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ForbiddenException } from '../forbidden.exception';

@Controller()
export class TestController {
    @Get()
    testAuth() {
        throw new ForbiddenException();
        return "should not reach here";
    }

    @Get("global")
    testGlobal() {
        throw new Error("Custom error");
        return "should not reach here";
    }
}
