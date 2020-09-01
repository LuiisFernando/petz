import { createMuiTheme } from '@material-ui/core/styles';

const MainTheme = createMuiTheme({
    overrides: {
        MuiButton: {
            containedPrimary: {
                color: '#FFF'
            }
        }
    },
    palette: {
        primary: {
            main: '#00A0E4'
        },
    },
});

export default MainTheme;
