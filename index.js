// Calculates the distance in blocks from a pickup location to the company headquarters
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    if (pickupLocation > hq) {
      return pickupLocation - hq;
    } else {
      return hq - pickupLocation;
    }
  }
  
  // Calculates the distance in feet from a pickup location to the company headquarters
  function distanceFromHqInFeet(pickupLocation) {
    const blockInFeet = 264; // 1 block is equivalent to 264 feet
    return distanceFromHqInBlocks(pickupLocation) * blockInFeet;
  }
  
  // Calculates the total distance travelled in feet based on a starting and ending location
  function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264;
    if (destination > start) {
      return (destination - start) * blockInFeet;
    } else {
      return (start - destination) * blockInFeet;
    }
  }
  
  // Calculates the fare price based on the distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Error message for distance over 2500 feet
    }
  }
  
