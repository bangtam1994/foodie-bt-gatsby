import styled from '../style';
import colors from './colors';

const HorizontalDivider = styled.hr({
  display: 'block',
  height: 1,
  border: 0,
  borderTop: `5px solid ${colors.purpleDark}`,
  margin: '1em 0',
});

export default HorizontalDivider;
