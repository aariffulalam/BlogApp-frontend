import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete'

import "./Blog.css";

import { useContext } from 'react';
import blogContext from '../context/blog/BlogContext';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Blog(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {deleteBlog, addReaction} = useContext(blogContext);


  return (
    <Card sx={{ maxWidth: 700 }} className="centerBlog"  key={props.index}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.data.authorId}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.title}
        subheader={(Date(props.data.createdAt)).split("GMT")[0]}
      />
      {/* {console.log(props.image)} */}
      <CardMedia
        component="img"
        // height="194"
        image={'http://localhost:8000/'+ props.data.image[0]}
        alt={(props.data.image[0].split("-")[1]).split(".")[0]}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.blog}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>addReaction(props.data.id)}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={()=>deleteBlog(props.data.id, props.data.authorId)}>
          <DeleteIcon/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            write something here!
          </Typography>
          <Typography paragraph>
          write something here!
          </Typography>
          <Typography paragraph>
          write something here!
          </Typography>
          <Typography>
          write something here!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );

}

