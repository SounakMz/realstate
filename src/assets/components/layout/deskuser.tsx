import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Usertable from '../ui/usertable';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

/* ---------------- Styled Search ---------------- */

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[500], 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[500], 0.25),
  },
  width: '100%',
  maxWidth: 300,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

/* ---------------- Modal Style ---------------- */

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

/* ---------------- Main Component ---------------- */

export default function UserContent() {
  const [tabValue, setTabValue] = React.useState('1');
  const [open, setOpen] = React.useState(false);

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setTabValue(newValue);
  };

  return (
    <section className="main-content-wrap">
      <Box sx={{ width: '100%' }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange}>
              <Tab label="Support Desk" value="1" />
              <Tab label="Edit Desk" value="2" />
            </TabList>
          </Box>

          {/* -------- TAB 1 -------- */}
          <TabPanel value="1">
            <div className="desk-user-sec sky-bg bg-adj">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <h2>Total 25 users</h2>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button className='modal-btn' variant="contained" onClick={() => setOpen(true)}>
                    +  Add User
                  </Button>

                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" />
                  </Search>
                </Box>
              </Box>

              <Usertable />

            </div>
          </TabPanel>

          {/* -------- TAB 2 -------- */}
          <TabPanel value="2">
            <h2>
              Total 26 users
            </h2>

            <Search sx={{ mb: 2 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" />
            </Search>

            <Usertable />
          </TabPanel>
        </TabContext>
      </Box>

      {/* -------- Modal -------- */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <div className="modal-content-wrap">
            <div className="modal-heading">
              <h2>Add Users</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="modalfield1">First Name</label>
                  <input id='modalfield1' className='form-control' type="text" placeholder='Enter first name' />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="modalfield2">Last Name</label>
                  <input id='modalfield2' className='form-control' type="text" placeholder='Enter last name' />
                </div>
              </div>

            </div>
          </div>
        </Box>
      </Modal>
    </section>
  );
}
