import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { deletePost } from "./postSlice";

import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PostDeleteConfirmation = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <Box sx={style}>
      <Typography variant="h5" textAlign="center">
        Delete Post
      </Typography>

      <Typography
        textAlign="center"
        sx={{ marginTop: "10px", marginBottom: "10px" }}
      >
        Do you want to <b>delete</b> this post?
      </Typography>

      <Box
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(deletePost(post._id))}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default PostDeleteConfirmation;
