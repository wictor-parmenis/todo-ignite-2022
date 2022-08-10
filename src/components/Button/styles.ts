import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.button`
    background-color: ${colors.blueDark};
    height: 60px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #000;
    outline: none;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;

    icon {
        color: white;
    }

`;

export const TextButton = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
`
