import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <ul>
        <li><Link prefetch href="/">
          <a>Index</a>
        </Link></li>
        <li><Link prefetch href="/movies">
          <a>Movies</a>
        </Link></li>
        <li><Link prefetch href="/properties">
          <a>Properties</a>
        </Link></li>
      </ul >
    </header >
  );
}
