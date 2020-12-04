import * as React from 'react';

import AppBox, {
  AppBoxOwnProps,
  LineHeight,
  PolymorphicComponent
} from 'ui/AppBox';

import jsxInnerText from 'tools/JSX';

type Props = AppBoxOwnProps & {
  readonly truncate?: number;
};

const Text = React.forwardRef<HTMLElement, Props>(
  ({ children, truncate, ...props }: Props, ref) => {
    let content = children;
    const innerText = jsxInnerText(content);
    if (truncate && innerText.length > truncate) {
      content = `${innerText.slice(0, truncate)}…`;
    }
    return (
      <AppBox
        ref={ref}
        as="p"
        fontFamily="body"
        {...(truncate ? { title: innerText } : {})}
        lineHeight={LineHeight.Base}
        {...props}>
        {content}
      </AppBox>
    );
  }
);

Text.displayName = 'Text';

export default Text as PolymorphicComponent<Props>;
