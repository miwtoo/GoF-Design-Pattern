import { FixedPackageCalculator } from './packages/fixedPackageCalculator';
import { HourFlexPackageCalculator } from './packages/hourFlexCalculator';
import { MonthlyCalculator } from './packages/monthlyCalculator';
import { PackageFactory } from './packages/packageFactory';
import { PackageType } from './packages/packageType';
import { SteppingPackageCalculator } from './packages/steppingPackageCalculator';
import { UnknowPackageCalculator } from './packages/unknowPackageCalculator';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = PackageFactory
      .createPackage(this.packageType)
      .calculate(this.totalHours);

    return this.totalWithVat(total);
  }

  private totalWithVat(total: number): number {
    return total + (total * this.vatRate) / 100;
  }
}
