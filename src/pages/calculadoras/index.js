import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CalcAR } from './doencas/calcar';
import { CalcEA } from './doencas/calcea';
import { CalcAPso } from './doencas/calcap';
import { CalcPso } from './doencas/calcpso';

const TabPanel = ({ children, value, index, ...other }) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        typography: 'body1',
                        p: 3
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export const Calculadoras = () => {

    const [value, setValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}
                >
                    <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example" >
                        <Tab label="AR" {...a11yProps(0)} />
                        <Tab label="EA" {...a11yProps(1)} />
                        <Tab label="APso" {...a11yProps(2)} />
                        <Tab label="Pso" {...a11yProps(3)} />
                        {/*     <Tab label="Atestado" {...a11yProps(3)} />
                                <Tab label="Em Branco" {...a11yProps(4)} /> */}
                    </Tabs>
                </Box>
                <TabPanel
                    value={value}
                    index={0}
                >
                    <CalcAR />
                </TabPanel>
                <TabPanel
                    value={value}
                    index={1}
                >
                    <CalcEA />
                </TabPanel>
                <TabPanel
                    value={value}
                    index={2}
                >
                    <CalcAPso />
                </TabPanel>
                <TabPanel
                    value={value}
                    index={3}
                >
                    <CalcPso />
                </TabPanel>
             
            </Box>
        </>
    )
}