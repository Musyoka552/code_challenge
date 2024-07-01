PATRICK MUSYOKA KILONZO

### Challenge1

1. Importing Scanner Class:
   - `import java.util.Scanner;` - allows users input to be read.

2. Prompting for Input:
   - System.out.print("Enter student marks (between 0 and 100): ") prompts the user to enter the student's marks.

3. Input Handling:
   - `scanner.nextFloat();` 

4. How the grade calculator works
   - The program checks the value of `marks` 
     - If `marks` is greater than 79, prints "Grade: A".
     - If between 60 and 79  prints "Grade: B".
     - If between 50 and 59 , prints "Grade: C".
     - If between 40 and 49 , prints "Grade: D".
     - If less than 40, prints "Grade: E".

5. Closing Scanner:
   - `scanner.close();` ensures that the `Scanner` object is closed properly after its use.

   ### Challenge2

1. Constants:
   - SPEED_LIMIT: This is set to 70 km/h.
   - DEMERIT_POINTS_THRESHOLD: This specifies the threshold increment, which is 5 km/h.
   - DEMERIT_POINTS_PER_THRESHOLD: This indicates the number of demerit points given for every increment of DEMERIT_POINTS_THRESHOLD above the speed limit.
   - LICENSE_SUSPENSION_POINTS: This defines the threshold for license suspension, which is set to 12 demerit points.

2. Input:
   - scanner.nextInt(); reads the user input as an integer, representing the speed of the car.

3. Speed Evaluation:
   - If the speed is less than or equal to SPEED_LIMIT` (70 km/h), the program prints "Ok".
   - If the speed exceeds SPEED_LIMIT`, the program calculates how much the speed is above the limit (kmAboveLimit).
   - Then calculates the number of demerit points (demeritPoints) based on how many times kmAboveLimit exceeds DEMERIT_POINTS_THRESHOLD (5 km/h).

4. Demerit Points and License Suspension:
   - The program prints "Points: " followed by the calculated demeritPoints.
   - If demeritPoints exceed LICENSE_SUSPENSION_POINTS, the program prints "License suspended"
5. Closing Scanner:
   - scanner.close(); ensures that the Scanner object is closed properly after its use.

### Challenge3

1. Constants:
   - `TAX_BRACKETS`: Array defining the income thresholds for tax brackets.
   - `TAX_RATES`: Array defining the corresponding tax rates for each bracket.
   - `NSSF_RATE`: Rate for NSSF deduction (6% of gross salary).

2. Input
   - `scanner.nextDouble();` reads the user inputs for basic salary and benefits.

4. Calculation:
   - Gross Salary: Sum of basic salary and benefits.
   - NSSF Deduction: Calculated as `grossSalary * NSSF_RATE`.
   - Taxable Income: Gross salary minus NHIF and NSSF deductions.
   - Net Salary: Gross salary minus tax, NHIF, and NSSF deductions.

5. Output:
   - The program prints detailed salary components including basic salary, benefits, gross salary, deductions (NHIF, NSSF), tax (PAYE), and net salary.

6. Closing Scanner:
   - `scanner.close();` ensures that the `Scanner` object is closed properly after its use.

