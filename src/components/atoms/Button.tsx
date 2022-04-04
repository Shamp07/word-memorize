import styled from '@emotion/styled';
import RawButton from '@mui/material/Button';

const Button = styled(RawButton)`
  min-width: 0;
  box-shadow: none;
  
  &:hover, &:focus {
    box-shadow: none;
  }
`;

export default Button;
