import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MediaCard from "./MediaCard";

function Content() {
  return (
    <>
      {/* <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        pt={2}
      > */}
      <Grid >
        <h1>Manchester United</h1>
        <p>
          Manchester United Football Club, commonly referred to as Man United
          (often stylised as Man Utd), or simply United, is a professional
          football club based in Old Trafford, Greater Manchester, England. The
          club competes in the Premier League, the top division in the English
          football league system. Nicknamed the Red Devils, it was founded as
          Newton Heath LYR Football Club in 1878, but changed its name to
          Manchester United in 1902. After a spell playing in Clayton,
          Manchester, the club moved to its current stadium, Old Trafford, in
          1910. Manchester United have won a record 20 League titles, 12 FA
          Cups, six League Cups, and a record 21 FA Community Shields. They have
          won the European Cup/UEFA Champions League three times, and the UEFA
          Europa League, the UEFA Cup Winners' Cup, the UEFA Super Cup, the
          Intercontinental Cup and the FIFA Club World Cup once each.[5][6] In
          1968, under the management of Matt Busby, 10 years after eight of the
          club's players were killed in the Munich air disaster, they became the
          first English club to win the European Cup. Sir Alex Ferguson is the
          club's longest-serving and most successful manager, winning 38
          trophies, including 13 league titles, five FA Cups, and two Champions
          League titles between 1986 and 2013.[7][8] In the 1998–99 season,
          under Ferguson, the club became the first in the history of English
          football to achieve the European treble of the Premier League, FA Cup,
          and UEFA Champions League.[9] In winning the UEFA Europa League under
          José Mourinho in 2016–17, they became one of five clubs to have won
          the original three main UEFA club competitions (the Champions League,
          Europa League and Cup Winners' Cup). Manchester United is one of the
          most widely supported football clubs in the world[10][11] and has
          rivalries with Liverpool, Manchester City, Arsenal and Leeds United.
          Manchester United was the highest-earning football club in the world
          for 2016–17, with an annual revenue of €676.3 million,[12] and the
          world's third most valuable football club in 2019, valued at £3.15
          billion ($3.81 billion).[13] After being floated on the London Stock
          Exchange in 1991, the club was taken private in 2005 after a purchase
          by American businessman Malcolm Glazer valued at almost £800 million,
          of which over £500 million of borrowed money became the club's
          debt.[14] From 2012, some shares of the club were listed on the New
          York Stock Exchange, although the Glazer family retains overall
          ownership and control of the club.
        </p>
      </Grid>
      <Grid>
        <MediaCard />
      </Grid>
      {/* </Grid> */}
    </>
  );
}

export default Content;
