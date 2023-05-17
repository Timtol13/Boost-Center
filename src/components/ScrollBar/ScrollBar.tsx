import React, { useEffect, useState } from 'react';
import './ScrollBar.modul.scss';

interface BoxProps {
  index: number;
}

const Box: React.FC<BoxProps> = ({ index }) => {
  const [marginTop, setMarginTop] = useState(400);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const boxHeight = 400;
      const offset = (0 + index) * boxHeight;
      const newMarginTop = index === 1 ? position - offset : Math.max(0, position - offset);
      setMarginTop(newMarginTop);
      const activeIndex = Math.floor((position / (5 * windowHeight)) * 5) + 1;
      const elements = [1, 2, 3, 4, 5];

      elements.forEach((index) => {
        const el = document.getElementById(`element${index.toString()}`);
        if (el) {
          if (index === activeIndex) {
            el.classList.add('active');
          } else {
            el.classList.remove('active');
          }
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);

  return (
    <a
      className={`element`}
      style={{ marginTop: `${marginTop}px` }}
      id={`element${index}`}
      href={'#MainPage'}
    >
      <h4>0{index}</h4>
    </a>
  );
};

export const ScrollBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const boxHeight = 100;
      const newIndex = 4 + Math.floor((position + windowHeight / 2) / boxHeight);
      setActiveIndex(newIndex);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="scrollbar">
        <div className={'line'}><div className={'inner'}></div></div>
      <div className="elements">
        {[5, 4, 3, 2, 1].map((index) => (
          <Box key={index} index={index} />
        ))}
      </div>
    </div>
  );
};