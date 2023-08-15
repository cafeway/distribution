import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// eslint-disable-next-line no-unused-vars

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Face } from '@mui/icons-material'; // Import an icon of your choice
import Grid from '@mui/material/Grid';
import { LineChart } from '@mui/x-charts/LineChart';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LocalShipping,MonetizationOn, ChevronRight,AccountBalanceWallet } from '@mui/icons-material';
import { Card, CardContent,CardMedia, Typography, CardHeader, CardActions, Menu, MenuItem } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'; // Import the MoreVert icon
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const orders = [
    { id: 1, orderNo: '12345', client: 'John Doe', phone: '123-456-7890', date: '2023-08-15', orderAmount: '$100', status: 'Pending' },
    { id: 2, orderNo: '67890', client: 'Jane Smith', phone: '987-654-3210', date: '2023-08-16', orderAmount: '$150', status: 'Shipped' },
    { id: 3, orderNo: '54321', client: 'Michael Johnson', phone: '555-555-5555', date: '2023-08-17', orderAmount: '$200', status: 'Processing' },
    { id: 4, orderNo: '98765', client: 'Emily Brown', phone: '111-222-3333', date: '2023-08-18', orderAmount: '$75', status: 'Delivered' },
    { id: 5, orderNo: '13579', client: 'Alex Turner', phone: '444-666-8888', date: '2023-08-19', orderAmount: '$120', status: 'Pending' },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
     
          
          <Typography variant="h8" noWrap component="div">
            Happy to see you back Amos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Dashboard', 'Customers', 'Orders', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Finance', 'Stock', 'Driver'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container spacing={2}>
      {/* First Column */}
      <Grid item xs={12} md={5}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          {/* Content for the first column */}
          <h6>Monthly overview</h6>
          <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
        </Paper>
      </Grid>

      {/* Second Column */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          {/* Content for the second column */}
          <h4>Total Cost</h4>
         <b><p>85% increase</p></b> 
       
         <h9>Compared to $84,000 last month</h9>
         <Card variant="outlined" style={{ marginBottom: '6px' }}>
      <CardHeader
       avatar={<LocalShipping />}
        title="Delivery cost"
        subheader="MTD IN KES"
      />

    </Card>
    <Card variant="outlined">
      <CardHeader
       avatar={<AccountBalanceWallet/>}
        title="Handling cost"
        subheader="MTD IN KES"
      />

    </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper elevation={3} style={{ padding: '20px' }}>
             
            <Card variant="outlined">
      <CardHeader
        avatar={<MonetizationOn />} 
        action={
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
        }
        title="Ontime Delivey Rate"
        subheader="80%"
      />
      <CardContent>
        <Typography variant="body2">
          weekly profit        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
        </Menu>
      </CardActions>
    </Card>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3} style={{ padding: '20px' }}>
            <Card variant="outlined">
      <CardHeader
        avatar={<MonetizationOn />} 
        action={
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
        }
        title="Average delivery time"
        subheader="4Days"
      />
      <CardContent>
        <Typography variant="body2">
         Past Month
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
        </Menu>
      </CardActions>
    </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          {/* Content for the second column */}
          <h6>Top Customers</h6>
          <Card variant="outlined">
     
      <CardContent>
        <Typography variant="h6">No Data</Typography>
        
      </CardContent>
    </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          {/* Content for the second column */}
          <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order No</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Order Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.orderNo}</TableCell>
              <TableCell>{order.client}</TableCell>
              <TableCell>{order.phone}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.orderAmount}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
      </Grid>
    </Grid>
         
      </Box>
    </Box>
  );
}
