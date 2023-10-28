import { MonthlyCalculator } from "./monthlyCalculator";

export class UnknowPackageCalculator implements MonthlyCalculator {
    calculate(totalHours: number): number {
        return 0;
    }
    
}