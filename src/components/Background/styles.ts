import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  ${() => `
    background: linear-gradient(
        to bottom,
        ${colors.gray700} 0%,
        ${colors.gray700} 30%,
        ${colors.gray400} 30%,
        ${colors.gray400} 100%
    );
  `}

  img {
      width: 200px;
      transform: translateY(120%);
  }
`;

export const Content = styled.div`
`