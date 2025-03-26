import { Insights,Lock,Dashboard,Email,Sms,Person, Notifications,AdminPanelSettings,Security} from '@mui/icons-material';

const NAV_OPTIONS = [
  {
    name: 'Dashboard',
    link: '/Dashboard',
    menu_icon: <Dashboard />,
    type: 'single_nav'
  },
  {
    name: 'Portfolio',
    link: '/Portfolio',
    menu_icon: <Person />,
    type: 'single_nav'
  },
  {
    name: 'Notifications',
    link: '/Notifications',
    menu_icon: <Notifications  />,
    type: 'single_nav'
  },
  {
    name: 'Notices',
    link: '/Notifications',
    menu_icon: <Email />,
    type: 'single_nav'
  },{
    name: 'Action',
    link: '/Notifications',
    menu_icon: <Sms />,
    type: 'single_nav'
  },{
    name: 'Data Upload',
    link: '/Notifications',
    menu_icon: <Insights />,
    type: 'single_nav'
  },{
    name: 'Control Panel',
    link: '/Notifications',
    menu_icon: <Lock />,
    type: 'single_nav'
  },{
    name: 'User Management',
    link: '/Notifications',
    menu_icon: <AdminPanelSettings />,
    type: 'single_nav'
  },{
    name: 'Permissions',
    link: '/Notifications',
    menu_icon: <Security />,
    type: 'single_nav'
  }
];

export default NAV_OPTIONS;
