import React, { FC } from 'react'
import { UnauthorizedComponent } from '../../components/unauthorized/UnauthorizedComponent'
import { RedirectProps } from '../../types/props/common/RedirectProps'

export const Unauthorized: FC<RedirectProps> = ({ redirectPath } ) => {
  return (
    <UnauthorizedComponent redirectPath={redirectPath} />
  );
}
