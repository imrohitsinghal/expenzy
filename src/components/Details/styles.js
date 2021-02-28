import {makeStyles, rgbToHex} from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'

export default makeStyles(()=> ({
    income:{
        borderBottom: '10px solid rgba(0,255,0,0.5)',
    },
    expense:{
        borderBottom: '10px solid rgba(255,0,0,0.5)',
    }

}))