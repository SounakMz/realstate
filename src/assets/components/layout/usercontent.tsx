import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Usertable from '../ui/usertable'

export default function UserContent() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[500], 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.grey[500], 0.25),
    },
    width: '100%',
    maxWidth: 400,
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  return (
    <section className="main-content-wrap">
      <div className="user-tab-sec">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Private Seller" value="1" />
                <Tab label="Agent Seller" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <div className="user-table-sec sky-bg bg-adj">
                <div className="user-table">
                  <div className="table-top-row">
                    <h2>Total 25 users</h2>
                    <div className="user-input">
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          id='usersearch'
                          placeholder="Search…"
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </Search>
                    </div>
                  </div>
                  <Usertable />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="user-table-sec sky-bg bg-adj">
                <div className="user-table">
                  <div className="table-top-row">
                    <h2>Total 26 users</h2>
                    <div className="user-input">
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          id='usersearch'
                          placeholder="Search…"
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </Search>
                    </div>
                  </div>
                  <Usertable />
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </section>
  );
}

