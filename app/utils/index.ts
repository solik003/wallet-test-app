
export const formatDate = (date: string) => {
    const transactionDate = new Date(date);
    const today = new Date();
    const dayDifference = Math.floor(
      (today.getTime() - transactionDate.getTime()) / (1000 * 3600 * 24)
    );
  
    if (dayDifference < 7) {
      return transactionDate.toLocaleDateString("en-US", { weekday: "long" });
    } else {
      return transactionDate.toLocaleDateString("en-US");
    }
};

export const calculateDailyPoints = (daysInSeason: number): string => {
    if (daysInSeason === 1) {
      return "2"; 
    }
    if (daysInSeason === 2) {
      return "3"; 
    }
  
    let points: number[] = [2, 3]; 
  
    for (let i = 2; i < daysInSeason; i++) {
      const previousDayPoints = points[i - 1];
      const dayBeforePreviousPoints = points[i - 2];
  
      const newPoints = Math.round(
        dayBeforePreviousPoints + previousDayPoints * 0.6
      );
      points.push(newPoints);
    }
  
    const totalPoints = points[daysInSeason - 1];
  
    if (totalPoints >= 1000) {
      const pointsInK = (totalPoints / 1000).toFixed(1); 
      return `${pointsInK}K`;
    }
  
    return totalPoints.toString(); 
};

export const getDaysInSeason = (seasonStartDate: Date): number => {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - seasonStartDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24)) + 1; 
};