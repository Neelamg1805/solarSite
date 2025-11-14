import React from 'react';
import { z } from 'zod';
import { useForm } from '../hooks/useForm';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Upload } from '../components/Upload';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useApi } from '../hooks/useApi';
import apiService from '../services/api';
import { useAppDispatch } from '../redux/hooks';
import { setRegistrationData, setComplete } from '../redux/slices/registrationSlice';
import { toast } from 'react-toastify';
import { RegistrationData } from '../types/user';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  phone: z.string().optional(),
  restaurantName: z.string().optional(),
  address: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema> & {
  avatar?: File[];
};

const userTypeOptions = [
  { label: 'Regular User', value: 'user' },
  { label: 'Restaurant Owner', value: 'restaurant' },
];

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const [userType, setUserType] = React.useState<string>('user');

  const { execute: registerUser, loading } = useApi(
    async (data: RegistrationData) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('password', data.password);
      if (data.phone) formData.append('phone', data.phone);
      if (data.restaurantName) formData.append('restaurantName', data.restaurantName);
      if (data.address) formData.append('address', data.address);
      if (data.avatar && data.avatar.length > 0) {
        data.avatar.forEach((file) => {
          formData.append('avatar', file);
        });
      }

      return await apiService.upload('/register', formData);
    },
    {
      onSuccess: (data) => {
        dispatch(setRegistrationData(form.values));
        dispatch(setComplete(true));
        toast.success('Registration successful!');
        console.log('Registration data:', data);
      },
      onError: (error) => {
        toast.error(error.message || 'Registration failed');
      },
    }
  );

  const form = useForm<RegistrationFormData>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      restaurantName: '',
      address: '',
      avatar: [],
    },
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
      await registerUser(values as RegistrationData);
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Register
          </h2>

          <form onSubmit={form.handleSubmit} className="space-y-6">
            <Select
              label="User Type"
              name="userType"
              options={userTypeOptions}
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            />

            <Input
              label="Full Name"
              name="name"
              value={form.values.name}
              onChange={form.handleChange('name')}
              onBlur={form.handleBlur('name')}
              error={form.touched.name ? form.errors.name : undefined}
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

            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.values.phone}
              onChange={form.handleChange('phone')}
              onBlur={form.handleBlur('phone')}
              error={form.touched.phone ? form.errors.phone : undefined}
            />

            {userType === 'restaurant' && (
              <>
                <Input
                  label="Restaurant Name"
                  name="restaurantName"
                  value={form.values.restaurantName}
                  onChange={form.handleChange('restaurantName')}
                  onBlur={form.handleBlur('restaurantName')}
                  error={form.touched.restaurantName ? form.errors.restaurantName : undefined}
                />

                <Input
                  label="Address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange('address')}
                  onBlur={form.handleBlur('address')}
                  error={form.touched.address ? form.errors.address : undefined}
                />
              </>
            )}

            <Upload
              label="Profile Picture"
              name="avatar"
              accept="image/*"
              multiple={false}
              maxSize={5}
              value={form.values.avatar}
              onChange={(files) => form.setValue('avatar', files)}
              preview={true}
            />

            <button
              type="submit"
              disabled={loading || form.isSubmitting}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading || form.isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Registering...
                </>
              ) : (
                'Register'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

