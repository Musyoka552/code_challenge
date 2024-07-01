import java.util.Scanner;

public class SpeedingTicket {

    public static void main(String[] args) {
        int SPEED_LIMIT = 70;
        int DEMERIT_POINTS_THRESHOLD = 5;
        int DEMERIT_POINTS_PER_THRESHOLD = 1;
        int LICENSE_SUSPENSION_POINTS = 12;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the speed of the car: ");
        try {
            int speed = scanner.nextInt();

            if (speed <= SPEED_LIMIT) {
                System.out.println("Ok");
            } else {
                int kmAboveLimit = speed - SPEED_LIMIT;
                int demeritPoints = kmAboveLimit / DEMERIT_POINTS_THRESHOLD;

                System.out.println("Points: " + demeritPoints);

                if (demeritPoints > LICENSE_SUSPENSION_POINTS) {
                    System.out.println("License suspended");
                }
            }

        }  finally {
            scanner.close();
        }
    }
}
