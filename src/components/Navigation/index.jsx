import React from "react";
import { Divider, List, ListItem, ListItemButton } from "@mui/material";

const mainNavs = [
  "Home",
  "News & Events",
  "About Us",
  "Contact Us",
  "Boards & Committees",
];

const secondNavs = [
  {
    title: "DATA & RESEARCH",
    items: [
      "Economy",
      "State Finances",
      "Education",
      "Healthcare",
      "Local Government",
      "Population and Demographics",
    ],
  },
  {
    title: "DATA & RESEARCH",
    items: ["Economy", "State Finances", "Education", "Healthcare"],
  },
  {
    title: "DATA & RESEARCH",
    items: [
      "Economy",
      "State Finances",
      "Education",
      "Healthcare",
      "Local Government",
      "Population and Demographics",
    ],
  },
  {
    title: "DATA & RESEARCH",
    items: [
      "Economy",
      "State Finances",
      "Education",
      "Healthcare",
      "Local Government",
      "Population and Demographics",
    ],
  },
];

const SecondNavCard = ({ title, items }) => {
  return (
    <div className="pl-10 py-10 sm:w-80 w-full flex-grow-0">
      <span className="text-left font-bold w-full text-dark-blue text-xl font-roboto-condensed">
        {title}
      </span>
      <div className="w-12 bg-dark-yellow mb-10 pl-10 pt-1"/>
      <List>
        {items.map((item, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                {/* <ListItemText primary="Home" className="text-center font-bold"/> */}
                <span className="text-left ">{item}</span>
              </ListItemButton>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default function Navigation({show}) {
  return (
    show && <div className="flex flex-col overflow-auto sm:overflow-hidden fixed z-10 bg-white">

      
      <div className="flex sm:flex-row flex-col w-screen sm:max-h-96 sm:overflow-hidden  h-auto">
        <div className="p-10 sm:w-96 flex-grow-0 bg-gray-1 w-full">
          <nav aria-label="main mailbox folders">
            <List>
              {mainNavs.map((item, index) => (
                <div key={index}>
                  {index ? <Divider /> : ""}
                  <ListItem disablePadding>
                    <ListItemButton>
                      {/* <ListItemText primary="Home" className="text-center font-bold"/> */}
                      <span className="text-center font-bold w-full">
                        {item}
                      </span>
                    </ListItemButton>
                  </ListItem>
                </div>
              ))}
            </List>
          </nav>
        </div>
        <div className="flex-auto flex w-full flex-wrap overflow-auto h-96">
          {secondNavs.map((item, i) => (
            <SecondNavCard {...item} key={i} />
          ))}
        </div>
      </div>
      
      
      <div className="pt-1 bg-blue"></div>
    </div>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// // import InboxIcon from '@mui/icons-material/Inbox';
// // import DraftsIcon from '@mui/icons-material/Drafts';

// export default function Navigation() {
//   return (
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <nav aria-label="main mailbox folders">
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton>
//               {/* <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon> */}
//               <ListItemText primary="Inbox" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               {/* <ListItemIcon>
//                 <DraftsIcon />
//               </ListItemIcon> */}
//               <ListItemText primary="Drafts" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </nav>
//       <Divider />
//       <nav aria-label="secondary mailbox folders">
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemText primary="Trash" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemText primary="Spam" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </nav>
//     </Box>
//   );
// }
