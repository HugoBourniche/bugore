import React, { FC } from 'react';
import './Content.less';

interface ContentProps {}

const Content: FC<ContentProps> = () => (
  <div className="Content text-size-m text-center">
    Site en cours de construction
  </div>
);

export default Content;
