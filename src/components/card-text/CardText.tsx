import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Paper,
  Card,
} from '@mui/material';

const styledCard = {
  width: '100%',
  backgroundColor: 'gray',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

interface CardTextProps {
  urlImg: string;
  altImg: string;
  title: string;
  content: string;
  author: string;
}

function CardText(props: CardTextProps) {
  return (
    <Paper elevation={8} sx={{ width: 250, marginBottom: '20px' }}>
      <Card sx={styledCard}>
        <CardMedia component="img" height="140" image={props.urlImg} alt={props.altImg} />

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" component="div">
            {props.content}
          </Typography>

          <Typography variant="body2">{props.author}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default CardText;
