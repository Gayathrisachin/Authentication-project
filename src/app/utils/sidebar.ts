const path = 'localhost:4200/';

// const advpath = '/nse-member-compliance-advertisement/#/';

// const cpath = '/nse-member-compliance/#/main/requests/annual-return';

export const ACLSidebarMenu = [
  /*Dashboard*/
  {
    icon: 'home',
    label: 'Home',
    href: '/users/home'
  },
  {
    icon: 'admin',
    label: 'Admin',
    href:'/users/admin'
  },
  {
    icon: 'profile',
    label: 'Profile',
    href:'/users/profile'
  },
  {
    icon: 'profile',
    label: 'Understanding Angular',
    children:[
      {
      icon: 'comp',
      label: 'Components',
      href:'/overview/aboutComp'
    },
    {
      icon: 'view',
      label: 'View Child',
      href:'/overview/view-child'
    },
    {
      icon: 'dir',
      label: 'Directives',
      href:'/overview/directives'
    },

  ]
  },
  {
    icon: 'profile',
    label: 'Rxjs',
    children:[
      {
      icon: 'profile',
      label: 'Subject',
      href:'/rxjs/'
      },
      {
      icon: 'profile',
      label: 'Behavior Subject',
      href:'/rxjs/behavior-subject'
      }
    ]
    
  }
]