import { FixedPackageCalculator } from "./fixedPackageCalculator";
import { HourFlexPackageCalculator } from "./hourFlexCalculator";
import { MonthlyCalculator } from "./monthlyCalculator";
import { PackageType } from "./packageType";
import { SteppingPackageCalculator } from "./steppingPackageCalculator";
import { UnknowPackageCalculator } from "./unknowPackageCalculator";

export class PackageFactory {
    static createPackage(packageType: PackageType): MonthlyCalculator {
        switch (packageType) {
            case PackageType.FIXED:
                return new FixedPackageCalculator();
            case PackageType.HOUR_FLEX:
                return new HourFlexPackageCalculator();
            case PackageType.STEPPING:
                return new SteppingPackageCalculator();
            default:
                return new UnknowPackageCalculator();
        }
    }
}