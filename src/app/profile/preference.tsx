'use client'
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import myPreference from '../../../public/resource/profileData/preference.json'

interface preferenceProps {
    name: string,
    value: boolean
}


const Preference = () => {

    const [preference, setPreference] = useState<preferenceProps[]>(myPreference)

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let newPreference = [...preference]
        newPreference[index].value = event.target.checked
        setPreference(newPreference)
    }

    return (
        <div className='bg-white z-10 h-[50%] w-[50%] flex flex-col items-center justify-center overflow-y-scroll rounded-[5px]'>
            <FormControl component="fieldset">
                <FormGroup aria-label="position">
                    {
                        preference.map((item, index) => {
                            return (
                                <FormControlLabel
                                    key={index}
                                    value={item.name}
                                    control={
                                        <Switch color="primary" checked={item.value} onChange={handleChange(index)} />
                                    }
                                    label={item.name}
                                    labelPlacement="start"
                                />
                            )
                        })
                    }
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default Preference;