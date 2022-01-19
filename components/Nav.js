import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={navStyles.navContainer}>
      <Container>
        <nav className={navStyles.nav}>
          <ul>
            <li>
              <Typography variant="h4">
                <Link href="/">NYT</Link>
              </Typography>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
    // <AppBar position="static">
    //   <Toolbar>
    //     <Link href="/">
    //       <a>
    //         <Typography variant="h6" color="inherit" component="div">
    //           Photos
    //         </Typography>
    //       </a>
    //     </Link>

    //   </Toolbar>
    // </AppBar>
  );
}

export default Nav;
