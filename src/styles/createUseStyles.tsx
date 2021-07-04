import React from 'react';

export const createUseStyles = <TContext, TStyles>(
  getStyles: (context: TContext, style: TStyles) => TStyles,
): ((context: TContext, style: TStyles) => TStyles) => {
  return (context, style) => {
    return React.useMemo(() => getStyles(context, style), [context, style]);
  };
};
