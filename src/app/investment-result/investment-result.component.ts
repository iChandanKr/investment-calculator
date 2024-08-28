import { Component,inject,Input,input} from '@angular/core';
import type { CalculatedRestult } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // @Input()
  // results?:CalculatedRestult[] 
  // results = input<CalculatedRestult[]>()
  private investmenService = inject(InvestmentService);

  get results(){
    return this.investmenService.resultData;
  }

}
