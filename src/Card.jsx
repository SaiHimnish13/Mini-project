import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Card.css"
export default function CardBox({object})
{
    
    return(
        <div className='main'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Stormclouds.jpg/250px-Stormclouds.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {object.City}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
        <p>Temperature: {object.temp}</p>
        <p>Maximum Temperature:{object.Temp_max}</p>
        <p>Minimum Temperature:{object.Temp_min}</p> 
        <p>Weather can be described as {object.desc} and temperature feels like {object.feels}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}