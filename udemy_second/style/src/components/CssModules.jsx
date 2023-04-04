import React from 'react'
import classes from './CssModules.module.scss';

export const CssModules = () => {
  return (
    <div className={classes.contianer}>
      <p>
        -- CSS Modules --
      </p>
      <button>Fight!</button>
    </div>
  )
}