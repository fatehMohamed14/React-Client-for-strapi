import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal'
import { createMuiTheme  } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500] // This is an orange looking color
    },
    secondary: {
      main: orange[900] //Another orange-ish color
    }
  },
});

export const ActionButton = withStyles({
  root: {
    background: `linear-gradient(25deg, ${yellow[500]} 10%, ${orange[900]}  90%)`,
    borderRadius: 3,
    border: 0,
    color: '#fff',
    height: 40,
    fontWeight: 900,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);