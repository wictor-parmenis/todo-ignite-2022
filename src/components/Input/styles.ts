import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.input`
    background: ${colors.gray400};
    padding: 10px 15px 10px;
    border-radius: 7px;
    outline: none;
    height: 40px;
    border: 1px solid #000;
    color: ${colors.gray300};
    font-size: 16px;
    font-weight: 500;
    
    ::placeholder {
        color: ${colors.gray300};
        font-size: 16px;
     }
`;  
