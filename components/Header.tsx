import React from 'react';

/**
 * APPROACH 1: Vite + React (Your Setup) ✓
 * Direct import works perfectly with Vite
 * The logo will be bundled as a static asset
 */
import logo from '../assets/logo/logo.png';

/**
 * Alternative approaches for other setups are commented below
 */

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* APPROACH 1: Vite/React - Direct Import (RECOMMENDED FOR YOUR PROJECT) */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation can go here */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

/**
 * ============================================
 * ALTERNATIVE APPROACHES (for reference)
 * ============================================
 */

/**
 * APPROACH 2: Next.js with next/image
 * Use this if you migrate to Next.js
 * 
 * import Image from 'next/image';
 * import logo from '@/public/logo.png';
 * 
 * export default function Header() {
 *   return (
 *     <header className="bg-white shadow-sm">
 *       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 *         <div className="flex justify-between items-center h-16">
 *           <Image
 *             src={logo}
 *             alt="Logo"
 *             width={40}
 *             height={40}
 *             priority
 *           />
 *         </div>
 *       </div>
 *     </header>
 *   );
 * }
 */

/**
 * APPROACH 3: Public folder fallback (if import fails)
 * Move logo to public/ folder instead of assets/
 * 
 * export const Header: React.FC = () => {
 *   return (
 *     <header className="bg-white shadow-sm">
 *       <img
 *         src="/logo.png"
 *         alt="Logo"
 *         className="h-10 w-auto"
 *       />
 *     </header>
 *   );
 * }
 */

/**
 * APPROACH 4: Vite with ?url query
 * Alternative Vite syntax for explicit URL import
 * 
 * import logoUrl from '../assets/logo/logo.png?url';
 * 
 * <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
 */

/**
 * KEY DIFFERENCES:
 * 
 * Vite (Your Setup):
 * ✓ Direct imports work out of the box
 * ✓ Assets bundled with your code
 * ✓ Great for dev and production
 * ✓ No need for /public folder
 * 
 * Next.js:
 * ✓ Use next/image for optimization
 * ✓ Automatic responsive sizing
 * ✓ Assets in /public folder
 * ✓ Built-in image optimization
 */
