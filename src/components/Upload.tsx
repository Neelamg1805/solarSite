import React, { useRef, useState } from 'react';
import { UploadProps } from '../types/form';
import { validateFileSize, validateFileType, formatFileSize } from '../utils/fileHelper';

export const Upload: React.FC<UploadProps> = ({
  label,
  name,
  accept = 'image/*',
  multiple = false,
  maxSize = 5, // 5MB default
  value = [],
  onChange,
  error,
  required,
  disabled,
  preview = true,
  className = '',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const hasError = !!error;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length === 0) return;

    // Validate files
    const validFiles: File[] = [];
    const acceptedTypes = accept.split(',').map(type => type.trim());

    files.forEach((file) => {
      if (!validateFileType(file, acceptedTypes)) {
        alert(`File ${file.name} is not a valid type. Accepted types: ${accept}`);
        return;
      }

      if (!validateFileSize(file, maxSize)) {
        alert(`File ${file.name} exceeds the maximum size of ${maxSize}MB`);
        return;
      }

      validFiles.push(file);
    });

    if (validFiles.length > 0) {
      const newFiles = multiple ? [...value, ...validFiles] : validFiles;
      onChange?.(newFiles);

      // Generate previews for images
      if (preview && accept.includes('image')) {
        const newPreviews: string[] = [];
        validFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            newPreviews.push(e.target?.result as string);
            if (newPreviews.length === validFiles.length) {
              setPreviews(prev => multiple ? [...prev, ...newPreviews] : newPreviews);
            }
          };
          reader.readAsDataURL(file);
        });
      }
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    const newFiles = value.filter((_, i) => i !== index);
    onChange?.(newFiles);
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div
        onClick={handleClick}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${hasError
            ? 'border-red-500 bg-red-50'
            : 'border-gray-300 hover:border-primary-500 hover:bg-primary-50'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          name={name}
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          disabled={disabled}
          className="hidden"
        />
        <div className="space-y-2">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-primary-600 hover:text-primary-500">
              Click to upload
            </span>{' '}
            or drag and drop
          </div>
          <p className="text-xs text-gray-500">
            {accept} (MAX. {maxSize}MB)
          </p>
        </div>
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}

      {/* File List */}
      {value.length > 0 && (
        <div className="mt-4 space-y-2">
          {value.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {preview && accept.includes('image') && previews[index] && (
                  <img
                    src={previews[index]}
                    alt={file.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-2 text-red-600 hover:text-red-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

