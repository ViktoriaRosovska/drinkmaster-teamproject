import styled from '@emotion/styled';
import { Switch } from '@mui/material';

const SwitchTheme = styled(Switch)`
  & .MuiSwitch-switchBase.Mui-checked {
    color: orange;
  }
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: orange;
  }
`;
export { SwitchTheme };
