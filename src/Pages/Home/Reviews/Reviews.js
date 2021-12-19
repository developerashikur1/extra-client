import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

        const settings = {
          dots:true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    useEffect(() =>{
        fetch('https://glacial-inlet-84612.herokuapp.com/customerReviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (

        // home page customers reviews section
        <div style={{paddingTop: '20px', paddingBottom: '50px'}}>
            <h2 style={{marginBottom:'25px'}}>Customers Reviews</h2>
        
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                </Grid>
                <Grid item xs={12} md={6}>
<Box sx={{p:5}}>
                {/* review slider */}
                <Slider {...settings}>

                         {/* review card */}
                            {reviews.map(review=> <Card 
                            key={review?._id}
                            sx={{width:'auto', boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                    {review?.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <Rating name="read-only" value={parseInt(review?.rating)} readOnly />
                                    </Typography>
                                    <Typography variant="body2">
                                   {review?.feedback}
                                    </Typography>
                                </CardContent>
                            </Card>)}
                    </Slider>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
            </Grid>
        </div>
    );
};

export default Reviews;