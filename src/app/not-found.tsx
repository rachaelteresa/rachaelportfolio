import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-32 h-32 gradient-pink rounded-full flex items-center justify-center mx-auto mb-8 cute-shadow">
          <span className="text-4xl text-white font-bold">404</span>
        </div>
        
        <h1 className="text-4xl font-bold gradient-text mb-4">Page Not Found</h1>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! It looks like this page doesn&apos;t exist. Let&apos;s get you back to somewhere magical.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-all duration-200 cute-shadow"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}