import java.util.Scanner;

public class GradeCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter student marks (between 0 and 100): ");
            float marks = scanner.nextFloat();
            
            if (marks < 0 || marks > 100) {
                System.out.println("Invalid input! Marks should be between 0 and 100.");
            } else if (marks > 79) {
                System.out.println("Grade: A");
            } else if (marks >= 60) {
                System.out.println("Grade: B");
            } else if (marks >= 50) {
                System.out.println("Grade: C");
            } else if (marks >= 40) {
                System.out.println("Grade: D");
            } else {
                System.out.println("Grade: E");
            }
            
        {
            scanner.close();
        }
    }
}
