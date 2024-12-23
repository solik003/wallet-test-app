import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { calculateDailyPoints, getDaysInSeason } from "../utils";

const DailyPoints: React.FC = () => {
  
  const seasonStartDate = new Date("2024-09-01"); 

  const daysInSeason = getDaysInSeason(seasonStartDate);

  const dailyPoints = calculateDailyPoints(daysInSeason);

  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
     <CardContent>
       <Typography variant="h5" component="div">
         Daily Points
      </Typography>
       <Typography variant="body1" color="text.secondary">
         {dailyPoints} 
       </Typography>
     </CardContent>
   </Card>
);
};

export default DailyPoints;
