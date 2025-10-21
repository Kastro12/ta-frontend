'use client';

import React from 'react';
import { Tooltip as DefaultTooltip } from '@mui/material';
import { TooltipProps as DefaultTooltipProps } from '@mui/material/Tooltip';

interface TooltipProps extends Omit<DefaultTooltipProps, 'title' | 'children'> {
  title: React.ReactNode;
  children: React.ReactElement;
  backgroundColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  backgroundColor = '#3f928e',
  ...rest
}) => {
  return (
    <DefaultTooltip
      title={title}
      enterDelay={500}
      leaveDelay={0}
      disableInteractive
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
            {
              name: 'computeStyles',
              options: {
                adaptive: false,
              },
            },
          ],
        },
        tooltip: {
          sx: {
            transition: 'none',
            transformOrigin: 'center bottom !important',
            mt: '0px !important',
            fontSize: '13px',
            backgroundColor: backgroundColor,
            fontWeight: '300',
            padding: '6px 8px',
          },
        },
      }}
      {...rest}
    >
      {children}
    </DefaultTooltip>
  );
};

export default Tooltip;
