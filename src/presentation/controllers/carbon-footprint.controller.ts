import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCarbonFootprintEntryUseCase } from '@application/use-cases/create-carbon-footprint-entry/create-carbon-footprint-entry.usecase';
import { GetCarbonFootprintHistoryUseCase } from '@application/use-cases/get-carbon-footprint-history/get-carbon-footprint-history.usecase';
import { CreateCarbonFootprintEntryDTO } from '@application/use-cases/create-carbon-footprint-entry/create-carbon-footprint-entry.dto';
import { CarbonOffsetSoapService } from '@infra/soap/carbon-offset.soap.service';

@Controller('carbon-footprint')
export class CarbonFootprintController {
  constructor(
    private readonly createUseCase: CreateCarbonFootprintEntryUseCase,
    private readonly getHistoryUseCase: GetCarbonFootprintHistoryUseCase,
    private readonly soapService: CarbonOffsetSoapService,
  ) {}

  @Post()
  async createEntry(@Body() dto: CreateCarbonFootprintEntryDTO) {
    await this.createUseCase.execute(dto);
    return { message: 'Entrada registrada com sucesso' };
  }

  @Get()
  async getHistory(@Query('userId') userId: string) {
    return await this.getHistoryUseCase.execute(userId);
  }

  @Get('offset-cost')
  async getOffsetCost(@Query('userId') userId: string) {
    const history = await this.getHistoryUseCase.execute(userId);
    const total = history.reduce(
      (sum, entry) => sum + entry.calculatedEmission,
      0,
    );
    const cost = await this.soapService.getOffsetCost(total);
    return {
      userId,
      totalEmission: total,
      offsetCostUSD: cost,
    };
  }
}
