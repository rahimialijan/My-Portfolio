import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {[
      'home',
      'about',
      'work',
      'skills',
      'testimonial',
      'contact',
    ].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
        className="app__navigation-dot"
      />
    ))}
  </div>
);

export default NavigationDots;
