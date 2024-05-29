import { useCallback, useEffect, useRef, useState } from 'react';

export const useClickOutside = <T extends HTMLElement>(onClose?: () => void) => {
  const ref = useRef<T>(null);
  const [isOpen, setOpen] = useState(false);

  const handleClose = useCallback(
    (event: MouseEvent) => {
      const isClickOutside =
        event.target instanceof HTMLElement && !ref.current?.contains(event.target);

      if (!isClickOutside) return;

      setOpen(false);
      onClose?.();
    },
    [setOpen, onClose],
  );

  useEffect(() => {
    window.addEventListener('click', handleClose);

    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [handleClose]);

  return {
    ref,
    isOpen,
    setOpen,
  };
};
