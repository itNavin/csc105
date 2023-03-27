import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea } from "@mui/material";


export default function MediaCard() {
  return (
    <Grid container spacing={4}>
      <Grid item md={6} xs={12}>
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article23164153.ece/ALTERNATES/s810/0_GettyImages-1370890784.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                David de Gea
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Spanish professional footballer who plays as a goalkeeper for
                Premier League club Manchester United and the Spain national
                team. He is widely regarded as one of the best goalkeepers in
                the world.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://talksport.com/wp-content/uploads/sites/5/2023/02/GettyImages-1247419017.jpg?strip=all&w=960&quality=100"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lisandro Martínez
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Argentine professional footballer who plays primarily as a
                centre-back for Premier League club Manchester United and the
                Argentina national team.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://static.independent.co.uk/2022/03/25/09/newFile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bruno Fernandes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Portuguese professional footballer who plays as an attacking
                midfielder for Premier League club Manchester United and the
                Portugal national team. He is known for his goalscoring,
                playmaking, penalty taking, and work rate.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
