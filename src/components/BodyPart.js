import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/target.png";
export default function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt="dumbells"
        styles={{ width: "40px", height: "40px" }}
      />
      <Typography>{item}</Typography>
    </Stack>
  );
}
