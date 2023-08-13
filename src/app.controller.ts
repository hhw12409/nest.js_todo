import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

//  defatult router
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
