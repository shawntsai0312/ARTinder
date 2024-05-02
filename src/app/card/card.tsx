'use client'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';

interface CardProps {
    name: string;
    discrption: string[];
    imgUrl: string;
}

const card = ({ name, discrption, imgUrl }: CardProps) => {
    return (
        <Card sx={{ height: '100%', width: '97.5%' }}>
            <CardCover>
                <img
                    src={imgUrl}
                    srcSet={`${imgUrl} 2x`}
                    loading="lazy"
                    alt=""
                />
            </CardCover>
            <CardCover
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 400px), linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 400px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', position: 'absolute', bottom: '100px', width: '93%' }}>
                <Stack spacing={30} direction="row" sx={{ width: '100%' }}>
                    <Typography level="h2" textColor="#fff">
                        {name}
                    </Typography>
                </Stack>
                {
                    discrption.map((item, index) => (
                        <Typography textColor="neutral.300" key={index}>
                            {item}
                        </Typography>
                    ))
                }
            </CardContent>
        </Card>
    )
}

export default card;