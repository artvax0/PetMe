import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { ROUTES } from '../../routes/routesModel';
import { useTheme } from '../../providers/ThemeProvider';

export default function NavDrawer({ isOpen, setIsOpen }) {
  const { mode, theme } = useTheme();

  const NavLink = styled(Link)(({ theme }) => `
    text-decoration: none;
    color: ${mode == 'light' ? '#000' : '#fff'};
    font-family: ${theme.typography.fontFamily};
  `)


  if (isOpen) return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor='left'>
      <Box width='250px' role='presentation' color={mode == 'light' ? '#000' : '#fff'}>
        <NavLink to={ROUTES.ABOUT}>
          <ListItemButton onClick={() => setIsOpen(false)}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>
              About Us
            </ListItemText>
          </ListItemButton>
        </NavLink>
        <Divider />
        <NavLink to={ROUTES.PRODUCTS}>
          <ListItemButton onClick={() => setIsOpen(false)}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>
              All Products
            </ListItemText>
          </ListItemButton>
        </NavLink>
        <Divider variant='middle' />
        <Box pt={1}>
          <Typography pl={2}>Categories</Typography>
          <NavLink to={ROUTES.FOOD}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Food
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.TREATS}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Treats
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.TOYS}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Toys
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.BEDDINGS_FURNITURE}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Bedding & Furniture
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.GROOMING}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Grooming Products
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.HEALTH}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Health & Wellness
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.CLOTHING}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Clothing & Accessories
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.FEEDING}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Feeding & Watering Supplies
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.TRAINING}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Training & Behaviour Aids
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.TRAVEL}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Travel & Outdoor Gear
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to={ROUTES.TECH}>
            <ListItemButton onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText>
                Pet Tech
              </ListItemText>
            </ListItemButton>
          </NavLink>
        </Box>
      </Box>
    </Drawer>
  )
  return null;
}
