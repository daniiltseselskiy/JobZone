import { injectGlobal } from 'styled-components';
import Helvetica_Regular from './Helvetica Regular/Helvetica-Regular.ttf';
injectGlobal`
    @font-face {
        font-family: Helvetica-Regular;
        src: url(${Helvetica_Regular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;