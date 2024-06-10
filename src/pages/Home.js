import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </Box>
  );
}
