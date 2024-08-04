// Define an "enum" for days of the week
const DaysOfWeek = Object.freeze({
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday',
    SATURDAY: 'Saturday',
    SUNDAY: 'Sunday'
  });
  
  // Function to get a message based on the day of the week
  function getDailyMessage(day) {
    switch (day) {
      case DaysOfWeek.MONDAY:
        return 'Start of the work week!';
      case DaysOfWeek.FRIDAY:
        return 'Happy Friday! The weekend is near!';
      case DaysOfWeek.SATURDAY:
      case DaysOfWeek.SUNDAY:
        return 'Enjoy your weekend!';
      default:
        return 'Have a great day!';
    }
  }
  
  // Test the function with various days
  console.log(getDailyMessage(DaysOfWeek.MONDAY));   // Output: Start of the work week!
  console.log(getDailyMessage(DaysOfWeek.FRIDAY));   // Output: Happy Friday! The weekend is near!
  console.log(getDailyMessage(DaysOfWeek.SATURDAY)); // Output: Enjoy your weekend!
  console.log(getDailyMessage('Unknown Day'));       // Output: Have a great day!
  