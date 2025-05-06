"use client";
import { useServiceLogForm } from "@/context/ServiceLogFormContext";
import { ExtendedCarType } from "@/validation/custom/schemas";
import { DirectionsCar } from "@mui/icons-material";
import {
  CardActions,
  CardContent,
  Paper,
  Typography,
  Button,
  CardHeader,
  CardMedia,
} from "@mui/material";
import CarServiceLog from "./CarServiceLog";

export default function CarCard({
  brand,
  model,
  year,
  mileage,
  color,
  id,
  licensePlate,
}: ExtendedCarType) {

  const { isServiceLogFormOpen, setIsServiceLogFormOpen } = useServiceLogForm()

  return (
    <Paper elevation={4}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.primary.main" }}>
          {brand + " " + model}
        </Typography>
        <Typography variant="caption">Year: {year}</Typography>
        <Typography>Mileage: {mileage}</Typography>
      </CardContent>
      <CardMedia sx={{ width: "100%" }}>
        <DirectionsCar sx={{ fontSize: 30 }} />
      </CardMedia>
      <CardActions>
        <Button variant="text" onClick={() => setIsServiceLogFormOpen(true)}>Add a service</Button>
      </CardActions>
      {isServiceLogFormOpen === true && (
        <CarServiceLog carId={id} brand={brand} model={model} />
      )}
    </Paper>
  );
}
