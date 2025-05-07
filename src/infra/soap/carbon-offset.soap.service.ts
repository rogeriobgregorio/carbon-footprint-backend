import { Injectable } from '@nestjs/common';
import * as soap from 'soap';

@Injectable()
export class CarbonOffsetSoapService {
  // URL mockada para testes locais com o SoapUI
  // Em produção, deve ser a URL do serviço SOAP real
  private readonly wsdlUrl = 'http://localhost:8088/mockCarbonOffsetBinding?WSDL';

  async getOffsetCost(emissionKg: number): Promise<number> {
    const client = await soap.createClientAsync(this.wsdlUrl);
    const [result] = await client.GetCarbonOffsetCostAsync({
      co2Emission: emissionKg,
    });

    return parseFloat(result.costUSD);
  }
}
