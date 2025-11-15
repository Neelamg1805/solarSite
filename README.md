# Solar Site - Modern React.js Project with Vite

A modern, full-featured React.js application built with Vite, TypeScript, Tailwind CSS, and Redux Toolkit.

## 🚀 Tech Stack

- **React 18** with **TypeScript**
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework with custom theme
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Zod** - Schema validation
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **React Hook Form** - Form handling

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Input.tsx       # Custom input component
│   ├── Select.tsx      # Custom select component
│   ├── Upload.tsx      # File upload component with preview
│   └── LoadingSpinner.tsx
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard with sidebar
│   ├── Register.tsx    # Registration form
│   └── LoginAs.tsx     # Login form
├── hooks/              # Custom React hooks
│   ├── useApi.ts       # API calling hook
│   └── useForm.ts      # Form handling hook with validation
├── redux/              # Redux store and slices
│   ├── store.ts
│   ├── hooks.ts
│   └── slices/
│       └── registrationSlice.ts
├── services/           # API services
│   └── api.ts          # Axios configuration
├── types/              # TypeScript type definitions
│   ├── common.d.ts
│   ├── form.d.ts
│   └── user.d.ts
├── utils/              # Utility functions
│   ├── dateFormatter.ts
│   ├── formatters.ts   # Currency, phone, number formatters
│   └── fileHelper.ts
└── App.tsx             # Main app component with routing
```

## 🛠️ Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:3001/api
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## ✨ Features

### Components
- **Input**: Text input with validation error display
- **Select**: Dropdown select with options
- **Upload**: File upload with preview, multiple file support, and validation

### Form Validation
- Zod schema validation
- Real-time field validation
- Error messages display
- File upload validation (type and size)

### State Management
- Redux Toolkit for global state
- Registration data slice example
- Type-safe Redux hooks

### API Integration
- Axios-based API service
- Request/response interceptors
- Error handling
- Loading states
- Toast notifications for success/error

### Utilities
- **Date formatting**: Movement format (e.g., "01 May - 15 June 2025")
- **Currency formatting**: International currency formatting
- **Phone formatting**: US phone number formatting
- **File helpers**: Size validation, type validation, base64 conversion

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Responsive dashboard sidebar
- Mobile menu toggle

## 🎨 Custom Theme

The project uses a custom Tailwind theme with:
- **Primary colors**: Blue palette (primary-50 to primary-900)
- **Secondary colors**: Purple palette (secondary-50 to secondary-900)
- **Fonts**: Inter (sans) and Poppins (display)
- **Custom spacing**: Extended spacing scale
- **Breakpoints**: xs, sm, md, lg, xl (mobile-first)

## 📝 Usage Examples

### Using the Form Hook

```typescript
import { useForm } from '../hooks/useForm';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const form = useForm({
  initialValues: { email: '', password: '' },
  validationSchema: schema,
  onSubmit: async (values) => {
    // Handle submission
  },
});
```

### Using the API Hook

```typescript
import { useApi } from '../hooks/useApi';
import apiService from '../services/api';

const { execute, loading, error, data } = useApi(
  (id: string) => apiService.get(`/users/${id}`),
  {
    onSuccess: (data) => console.log('Success:', data),
    onError: (error) => console.error('Error:', error),
  }
);
```

## 🔧 Configuration

### Environment Variables
- `VITE_API_BASE_URL`: Base URL for API requests

### Tailwind Configuration
Custom theme configuration in `tailwind.config.js`:
- Colors (primary, secondary)
- Fonts (Inter, Poppins)
- Spacing
- Breakpoints

## 📱 Pages

1. **Dashboard** (`/`): Main dashboard with sidebar navigation, stats cards, and registration data display
2. **Register** (`/register`): Registration form with user type selection, file upload, and validation
3. **Login** (`/login`): Login form with user type selection

## 🎯 Next Steps

- Connect to your backend API
- Add authentication flow
- Implement protected routes
- Add more pages and features as needed

## 📄 License

MIT
