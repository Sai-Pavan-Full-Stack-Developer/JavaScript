// Function to determine the type of day based on the day number
function getDayType(dayNumber) {
    let dayType;
  
    switch (dayNumber) {
      case 1:
        dayType = 'Monday - Start of the work week';
        break;
      case 2:
        dayType = 'Tuesday - Second day of the work week';
        break;
      case 3:
        dayType = 'Wednesday - Midweek';
        break;
      case 4:
        dayType = 'Thursday - Almost there';
        break;
      case 5:
        dayType = 'Friday - End of the work week';
        break;
      case 6:
        dayType = 'Saturday - Weekend';
        break;
      case 7:
        dayType = 'Sunday - Weekend';
        break;
      default:
        dayType = 'Invalid day number - Please enter a number between 1 and 7';
        break;
    }
  
    console.log(dayType);
  }
  
  // Test the function with various inputs
  getDayType(1); // Output: Monday - Start of the work week
  getDayType(4); // Output: Thursday - Almost there
  getDayType(7); // Output: Sunday - Weekend
  getDayType(10); // Output: Invalid day number - Please enter a number between 1 and 7
  