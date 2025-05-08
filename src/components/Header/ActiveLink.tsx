import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter();
  const style = {
    fontWeight: router.asPath === href ? '500' : '400',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;