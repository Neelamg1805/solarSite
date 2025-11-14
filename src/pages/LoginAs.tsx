import React from 'react';
import { z } from 'zod';
import { useForm } from '../hooks/useForm';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useApi } from '../hooks/useApi';
import apiService from '../services/api';
import { toast } from 'react-toastify';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  userType: z.string().min(1, 'Please select a user type'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const userTypeOptions = [
  { label: 'Regular User', value: 'user' },
  { label: 'Restaurant Owner', value: 'restaurant' },
  { label: 'Admin', value: 'admin' },
];

export const LoginAs: React.FC = () => {
  const { execute: login, loading } = useApi(
    async (data: LoginFormData) => {
      return await apiService.post('/login', data);
    },
    {
      onSuccess: (data) => {
        toast.success('Login successful!');
        console.log('Login data:', data);
        // Store token if provided
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
      },
      onError: (error) => {
        toast.error(error.message || 'Login failed');
      },
    }
  );

  const form = useForm<LoginFormData>({
    initialValues: {
      email: '',
      password: '',
      userType: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Login
          </h2>

          <form onSubmit={form.handleSubmit} className="space-y-6">
            <Select
              label="Login As"
              name="userType"
              options={userTypeOptions}
              value={form.values.userType}
              onChange={form.handleChange('userType')}
              onBlur={form.handleBlur('userType')}
              error={form.touched.userType ? form.errors.userType : undefined}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={form.values.email}
              onChange={form.handleChange('email')}
              onBlur={form.handleBlur('email')}
              error={form.touched.email ? form.errors.email : undefined}
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              value={form.values.password}
              onChange={form.handleChange('password')}
              onBlur={form.handleBlur('password')}
              error={form.touched.password ? form.errors.password : undefined}
              required
            />

            <button
              type="submit"
              disabled={loading || form.isSubmitting}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading || form.isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

