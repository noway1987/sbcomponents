// src/stories/Button.stories.jsx
import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Primary = () => <Button label="Primary Button" />;
export const Secondary = () => <Button label="Secondary Button" />;
