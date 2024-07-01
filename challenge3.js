import java.util.Scanner;

public class NetSalaryCalculator {

    public static void main(String[] args) {
        // Constants for tax brackets and rates
        double[] TAX_BRACKETS = {24000, 32333, 500000, 800000,};
        double[] TAX_RATES = {0.1, 0.25, 0.3, 0.325, 0.35};

        // Constants for NHIF and NSSF rates
        double NHIF_RATE = 0.015;
        double NSSF_RATE = 0.06;

        Scanner scanner = new Scanner(System.in);

            // Input basic salary
            System.out.print("Enter basic salary: ");
            double basicSalary = scanner.nextDouble();

            // Input benefits (allowances, bonuses, etc.)
            System.out.print("Enter benefits: ");
            double benefits = scanner.nextDouble();

            // Calculate gross salary
            double grossSalary = basicSalary + benefits;

            // Calculate NHIF deduction

            const nhifDeduction = () => {
                let salary = totalIncome();
                let nhifAmount = 0;
    
                if (salary >= 1000) {
                    if (salary >= 1000 && salary <= 5999) {
                        nhifAmount += 150;
                    } else if (salary >= 6000 && salary <= 7999) {
                        nhifAmount += 300;
                    } else if (salary >= 8000 && salary <= 11999) {
                        nhifAmount += 400;
                    } else if (salary >= 12000 && salary <= 14999) {
                        nhifAmount += 500;
                    } else if (salary >= 15000 && salary <= 19999) {
                        nhifAmount += 600;
                    } else if (salary >= 20000 && salary <= 24999) {
                        nhifAmount += 750;
                    } else if (salary >= 25000 && salary <= 29999) {
                        nhifAmount += 850;
                    } else if (salary >= 30000 && salary <= 34999) {
                        nhifAmount += 900;
                    } else if (salary >= 35000 && salary <= 39999) {
                        nhifAmount += 950;
                    } else if (salary >= 40000 && salary <= 44999) {
                        nhifAmount += 1000;
                    } else if (salary >= 45000 && salary <= 49999) {
                        nhifAmount += 1100;
                    } else if (salary >= 50000 && salary <= 59999) {
                        nhifAmount += 1200;
                    } else if (salary >= 60000 && salary <= 69999) {
                        nhifAmount += 1300;
                    } else if (salary >= 70000 && salary <= 79999) {
                        nhifAmount += 1400;
                    } else if (salary >= 80000 && salary <= 89999) {
                        nhifAmount += 1500;
                    } else if (salary >= 90000 && salary <= 99999) {
                        nhifAmount += 1600;
                    } else if (salary >= 100000) {
                        nhifAmount += 1700;
                    }
                } else {
                    nhifAmount += 0;
                }
    
                return nhifAmount;
            };

            // Calculate NSSF deduction
            double nssfDeduction = grossSalary * NSSF_RATE;

            // Calculate taxable income
            double taxableIncome = grossSalary - nhifDeduction - nssfDeduction;

            // Calculate PAYE (tax)
            double tax = calculateTax(taxableIncome, TAX_BRACKETS, TAX_RATES);

            // Calculate net salary
            double netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

            // Print results
            System.out.println("\nSalary Details:");
            System.out.println("Basic Salary: " + basicSalary);
            System.out.println("Benefits: " + benefits);
            System.out.println("Gross Salary: " + grossSalary);
            System.out.println("NHIF Deduction: " + nhifDeduction);
            System.out.println("NSSF Deduction: " + nssfDeduction);
            System.out.println("Tax (PAYE): " + tax);
            System.out.println("Net Salary: " + netSalary);

        } 
        {
            scanner.close();
        
    }
}
