"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import {
  ArticleOutlined,
  CachedOutlined,
  EmailOutlined,
  FilterDramaOutlined,
} from "@mui/icons-material";

export default function Services() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        maxWidth: "95%",
        height: "100vh",
        my: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: theme.typography.h1.fontFamily,
          position: "relative",
          "::after": {
            content: '""',
            position: "absolute",
            height: "3px",
            backgroundColor: theme.palette.primary.main, // your brand accent
            bottom: -4, // adjust based on font
            left: "8%", // start around the "y"
            width: "92%", // until the "e"
            borderRadius: "2px",
          },
          mb: 10,
        }}
      >
        Your Car. Our Care.
      </Typography>
      <Grid container spacing={3} gap={3}>
        <Grid size={4}>
          <Box
            sx={{
              borderRadius: 6,
              height: "100%",
              boxShadow: "0px 8px 10px -2px #f1ba4d",
              border: "2px solid ",
              borderColor: theme.palette.primary.main,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all .3s ease-in",
              p: 3,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                transform: "translateY(-5px) scale(1.02)",
              },
            }}
          >
            <BuildOutlinedIcon sx={{ flex: 1, fontSize: "2.8em", my: 3 }} />
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                minHeight: "3.5em", // or adjust based on font size + line height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Oil Change Reminders
            </Typography>
            <Typography variant="body2">
              Stay on top of your engine health. Carvanna keeps track of your
              last oil change and sends you an email when it's time for the next
              one.
            </Typography>
          </Box>
        </Grid>
        <Grid size={4} spacing={8}>
          <Box
            sx={{
              borderRadius: 6,
              height: "100%",
              boxShadow: "0px 8px 10px -2px #f1ba4d",
              border: "2px solid ",
              borderColor: theme.palette.primary.main,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all .3s ease-in",
              p: 3,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                transform: "translateY(-5px) scale(1.02)",
              },
            }}
          >
            <CachedOutlined sx={{ flex: 1, fontSize: "2.8em", my: 3 }} />
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                minHeight: "3.5em", // or adjust based on font size + line height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Tire Rotation Tracking
            </Typography>
            <Typography variant="body2">
              Stay insured. Carvanna tracks your policy and reminds you before
              it expires so you're always covered.
            </Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box
            sx={{
              borderRadius: 6,
              height: "100%",
              boxShadow: "0px 8px 10px -2px #f1ba4d",
              border: "2px solid ",
              borderColor: theme.palette.primary.main,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all .3s ease-in",
              p: 3,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                transform: "translateY(-5px) scale(1.02)",
              },
            }}
          >
            <ArticleOutlined sx={{ flex: 1, fontSize: "2.8em", my: 3 }} />
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                minHeight: "3.5em", // or adjust based on font size + line height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Insurance Renewal Alerts
            </Typography>
            <Typography variant="body2">
              Never miss a renewal date. Get timely email reminders when your
              car insurance is about to expire, so you're always covered.
            </Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box
            sx={{
              borderRadius: 6,
              height: "100%",
              boxShadow: "0px 8px 10px -2px #f1ba4d",
              border: "2px solid ",
              borderColor: theme.palette.primary.main,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all .3s ease-in",
              p: 3,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                transform: "translateY(-5px) scale(1.02)",
              },
            }}
          >
            <FilterDramaOutlined sx={{ flex: 1, fontSize: "2.8em", my: 3 }} />
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                minHeight: "3.5em", // or adjust based on font size + line height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              PUC (Pollution Under Control) Tracking
            </Typography>
            <Typography variant="body2">
              Stay compliant with emissions regulations. Carvanna reminds you to
              renew your PUC certificate on time.
            </Typography>
          </Box>
        </Grid>
        <Grid size={4}></Grid>
        <Grid size={4}>
          <Box
            sx={{
              borderRadius: 6,
              height: "100%",
              boxShadow: "0px 8px 10px -2px #f1ba4d",
              border: "2px solid ",
              borderColor: theme.palette.primary.main,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all .3s ease-in",
              p: 3,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                transform: "translateY(-5px) scale(1.02)",
              },
            }}
          >
            <EmailOutlined sx={{ flex: 1, fontSize: "2.8em", my: 3 }} />
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                minHeight: "3.5em", // or adjust based on font size + line height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Email Notifications
            </Typography>
            <Typography variant="body2">
              Get email reminders exactly when you need them — for oil changes,
              tire rotations, insurance, and PUC. No more manual tracking or
              last-minute surprises.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
