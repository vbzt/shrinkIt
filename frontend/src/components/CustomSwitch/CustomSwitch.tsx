import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'

interface CustomSwitchProps {
  customSlugSwitch: boolean
  handleSwitchToggle: () => void

}

export default function CustomSwitch({ customSlugSwitch, handleSwitchToggle }: CustomSwitchProps) {
  return (
    <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={customSlugSwitch}
                    onChange={handleSwitchToggle}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#6D4FB5',
                        '& + .MuiSwitch-track': {
                          backgroundColor: '#6D4FB5',
                        },
                      },
                      '& .MuiSwitch-thumb': {
                        backgroundColor: '#6D4FB5',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: '#6D4FB5',
                      },
                      '& .MuiSwitch-switchBase:hover': {
                        backgroundColor: 'rgba(109, 79, 181, 0.08)',
                      },
                    }}
                  
                  />
                }
                label="Custom slug"
                disableTypography
              />
          </FormGroup>
  )
}
