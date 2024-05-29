'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { deleteCookie } from 'cookies-next';
import { Cookies } from '@/shared/constants';

export const LogoutUser = (): null => {
  const { replace } = useRouter();
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      deleteCookie(Cookies.ROLE);
      replace('/login');
    }, 1000);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [replace]);

  return null;
};
