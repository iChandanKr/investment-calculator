import { Component,Input,input} from '@angular/core';
import type { CalculatedRestult } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

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
  results = input<CalculatedRestult[]>()

}
