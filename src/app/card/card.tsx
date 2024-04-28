'use client'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

interface CardProps {
    name: string;
    discrption: string;
}

const card = ({ name, discrption }: CardProps) => {
    return (
        <Card sx={{ height: '100%', width: '97.5%' }}>
            <CardCover>
                <img
                    src="/resource/data/img/許金川教授.jpg"
                    srcSet="/resource/data/img/許金川教授.jpg 2x"
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
            <CardContent sx={{ justifyContent: 'flex-end', position: 'absolute', bottom: '100px' }}>
                <Stack spacing={30} direction="row" sx={{ width: '100%' }}>
                    <Typography level="h2" textColor="#fff">
                        {name}
                    </Typography>
                    <IconButton>
                        <InfoIcon sx={{ fill: '#ffffff' }} />
                    </IconButton>
                </Stack>
                <Typography textColor="neutral.300">
                    {discrption}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default card;