# Auth Setup Guide

This project now includes NextAuth.js with Google OAuth provider and MUI UI components from the reference project.

## Environment Variables

Add the following environment variables to your `.env` file:

```env
# Database
DATABASE_URL="file:./db.sqlite"

# Next Auth
# You can generate a new secret on the command line with:
# openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an OAuth 2.0 Client ID
5. Set the authorized redirect URI to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env` file

## Features

- **NextAuth Integration**: Uses NextAuth.js for authentication
- **Google OAuth**: Sign in with Google account
- **MUI Components**: Modern UI using Material-UI v7
- **Auth Guards**: Route protection with AuthGuard, GuestGuard, and RoleBasedGuard
- **Auth Context**: Centralized auth state management
- **Type Safety**: Full TypeScript support

## Pages

- `/` - Home page with auth status
- `/auth/login` - Login page with Google OAuth
- `/dashboard` - Protected dashboard page (requires authentication)

## Usage

### Protecting Routes

```tsx
import { AuthGuard } from '@/auth/guard';

export default function ProtectedPage() {
  return (
    <AuthGuard>
      <div>This content is only visible to authenticated users</div>
    </AuthGuard>
  );
}
```

### Using Auth Context

```tsx
import { useAuthContext } from '@/auth/hooks';

export default function MyComponent() {
  const { user, authenticated, logout } = useAuthContext();
  
  return (
    <div>
      {authenticated ? (
        <div>Welcome, {user?.name}!</div>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
}
```

## Architecture

The auth system follows the same patterns as the reference project:

- `src/auth/types.ts` - Type definitions
- `src/auth/context/` - Auth context providers
- `src/auth/hooks/` - Custom hooks for auth
- `src/auth/guard/` - Route protection components
- `src/components/` - UI components including theme provider 