import * as React from 'react';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';


function GradientCircularProgress() {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="20%" stopColor="#C95F3B" />
              <stop offset="100%" stopColor="#ff6b3a" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
      </React.Fragment>
    );
  }

  export default GradientCircularProgress