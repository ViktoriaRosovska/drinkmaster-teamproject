import styled from '@emotion/styled';
import { Switch } from '@mui/material';

const SwitchTheme = styled(Switch)`
  & .MuiSwitch-switchBase + .MuiSwitch-track {
    color: gray;
  }
  & .MuiSwitch-switchBase + .MuiSwitch-track {
    background-color: gray;
  }
  & .MuiSwitch-switchBase.Mui-checked {
    color: #161f37;
  }
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #161f37;
  }
`;
export { SwitchTheme };
