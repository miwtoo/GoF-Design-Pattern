import { FixedPackageCalculator } from './packages/fixedPackageCalculator';
import { HourFlexPackageCalculator } from './packages/hourFlexCalculator';
import { MonthlyCalculator } from './packages/monthlyCalculator';
import { PackageType } from './packages/packageType';
import { UnknowPackageCalculator } from './packages/unknowPackageCalculator';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: string;

  constructor(totalHours: number, packageType: string) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = this.package(this.packageType).calculate(this.totalHours);

    return this.totalWithVat(total);
  }

  private package( packageType: string ) : MonthlyCalculator {
    switch (packageType) {
      case PackageType.FIXED:
        return new FixedPackageCalculator();
      case PackageType.HOUR_FLEX:
        return new HourFlexPackageCalculator();
      default:
        return new UnknowPackageCalculator();
    }
  }

  private totalWithVat(total: number): number {
    return total + (total * this.vatRate) / 100;
  }
}
