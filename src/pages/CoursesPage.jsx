import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '.././styles/Card.css';

const CoursesPage = () => {
  return (
    <div className='DivCard'>
      <Card className='card' sx={{ maxWidth: 335 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://miro.medium.com/max/1400/0*MFc4K8mR4_YdinyG"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        JavaScript + React
        </Typography>
        <Typography style={{fontSize: '15px'}} variant="body2" color="text.secondary">
        Полный курс по JavaScript + React - с нуля до результата.
        </Typography>
        <Typography variant="body2">
        цена: 490 $        
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained">INFO</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default CoursesPage;
