import { Controller, Post, Body, Req } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-intent')
  async createPaymentIntent(@Body('amount') amount: number) {
    const currency = 'usd';  // Puedes cambiar esto según tu preferencia
    return await this.paymentsService.createPaymentIntent(amount, currency);
  }

  @Post('webhook')
  async handleWebhook(@Req() request: any) {
    return await this.paymentsService.handleWebhook(request.body);
  }
}
