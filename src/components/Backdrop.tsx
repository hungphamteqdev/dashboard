import { useAppDispatch } from '@/store/config';
import {
  toggleBackdrop,
  useBackdropSelector,
} from '@/store/slices/backdropSlice';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Backdrop = () => {
  const $portal = useRef<HTMLDivElement | null>(null);
  const [mouted, setMouted] = useState(false);
  const { show } = useBackdropSelector();
  const dispatch = useAppDispatch();

  console.log('backdrop: ', show);

  useEffect(() => {
    if (mouted) return;
    $portal.current = document.querySelector('#app-portal');
    setMouted(true);
  }, [mouted]);

  useEffect(() => {
    const $body = document.querySelector('body');
    if (!$body) return;
    if (show) {
      $body.classList.add('block-scroll');
      return;
    }
    $body.classList.remove('block-scroll');
  }, [show]);

  return (
    <>
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
    </>
  );
};
export default Backdrop;
