import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;
const Container = ({ children }: Props) => {
  return (
    <div className="my-5 box has-background-info-light">
      <div className="has-text-centered">
        <h3 className="title is-3 mb-4">Order Summary</h3>
      </div>
      {children}
    </div>
  );
};

export default Container;
