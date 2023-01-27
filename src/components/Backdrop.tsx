import { useAppDispatch } from '@/store/config';
import {
  toggleBackdrop,
  useBackdropSelector,
} from '@/store/slices/backdropSlice';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  const $portal = useRef<HTMLDivElement | null>(null);
  const [mouted, setMouted] = useState(false);
  const { show } = useBackdropSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mouted) return;
    $portal.current = document.querySelector('#app-portal');
    setMouted(true);
  }, [mouted]);

  return (
    <div
      className={clsx({
        'block-scroll': show,
      })}
    >
      {children}
      {show &&
        $portal.current &&
        createPortal(
          <div
            onClick={() => {
              dispatch(toggleBackdrop(!show));
            }}
            className={clsx('fixed top-0 left-0 w-full h-full bg-colorGray')}
          />,
          $portal.current
        )}
    </div>
  );
};
export default Backdrop;
