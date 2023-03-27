import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Rightbar() {
  return (
    <Box display={{ xs: "none", md: "block" }}>
      <ImageList cols={2} rowHeight={500}>
        <ImageListItem>
          <img
            src="https://wp.inews.co.uk/wp-content/uploads/2021/12/PRI_214159139.jpg"
            alt="Image 1"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://metro.co.uk/wp-content/uploads/2023/01/SEI_139827784-659a.jpg?quality=90&strip=all"
            alt="Image 2"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://www.thesun.co.uk/wp-content/uploads/2023/02/casemiro-manchester-united-reacts-shown-793237898-1.jpg?strip=all&quality=100&w=1920&h=1440&crop=1"
            alt="Image 3"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt70405c85c02bce6b/640af8f9a1b49031bd09d396/GOAL_-_Blank_WEB_-_Facebook.jpg?auto=webp&format=jpg&quality=80"
            alt="Image 4"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}

export default Rightbar;
