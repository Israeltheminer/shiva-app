import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: "80px",
  boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.2)',
  color: theme.palette.text.secondary,
  display: "grid",
  position: "relative",
  alignItems: "center"
}));

interface ContentBoxProps {
  content: {name: string,info: string;}[];
}

const ContentBox = ({content}: ContentBoxProps) => {
  const singleContentStyle = "px-3 flex items-end";
  const doubleContentStyle = "px-3 inline-flex items-end w-[50%]";
  return (
    <div className="justify-between items-center inline">
      {content.map(item => {
        return (
          <div key={`${item.name}`} className={content.length < 2 ? singleContentStyle : doubleContentStyle}>
            <p className='text-xs font-semibold'>{item.name}</p>
            <h1 style={{fontSize: "28px",fontWeight: "700"}} className="leading-6 text-red-600 ml-auto">{item.info}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default function BasicGrid() {
  return (
    <div className='mt-28 mx-[10%] mb-10'>
      <Box sx={{flexGrow: 1}}>
        <Grid container columnSpacing={3} rowSpacing={5}>
          <Grid item xs={12} md={6}>
            <Item>
              <div className='flex items-center absolute top-[-26px] left-0 w-full justify-between mb-3'>
                <p className='font-semibold text-sm'>Warehouse</p>
                <span className='flex items-center gap-4'>
                  <p className='font-light text-sm'>All Devices</p>
                  <img src="/down-arrow.svg" alt=">" className='w-3 h-3 hover:scale-110 cursor-pointer' />
                </span>
              </div>
              <ContentBox content={[{name: "READY TO USE",info: "24"},{name: "DAMAGED DEVICES",info: "12"}]} />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <div className='flex items-center absolute top-[-26px] left-0 w-full justify-between mb-3'>
                <p className='font-semibold text-sm'>Devices at Vendor</p>
                <span className='flex items-center gap-4'>
                  <p className='font-light text-sm'>All Devices</p>
                  <img src="/down-arrow.svg" alt=">" className='w-3 h-3 hover:scale-110 cursor-pointer' />
                </span>
              </div>
              <ContentBox content={[{name: "ACTIVE DEVICES",info: "24"},{name: "OFFLINE DEVICES",info: "12"}]} />
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <ContentBox content={[{name: "READY TO USE",info: "53"}]} />
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <ContentBox content={[{name: "INACTIVE DEVICES",info: "32"}]} />
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <ContentBox content={[{name: "ACTIVE VENDORS",info: "157"}]} />
            </Item>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Item>
              <ContentBox content={[{name: "# OF LOCATIONS",info: "3"}]} />
            </Item>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Item>
              <ContentBox content={[{name: "# OF DEVICES",info: "4"}]} />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Item>
              <ContentBox content={[{name: "START DATE",info: "JAN 1, 2023"}]} />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Item>
              <ContentBox content={[{name: "START DATE",info: "FEB 1, 2023"}]} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
