import React from 'react';

export const Icon = ({ name, className = '' }) => {
  return <i className={`fa-solid ${name} ${className}`}></i>;
};