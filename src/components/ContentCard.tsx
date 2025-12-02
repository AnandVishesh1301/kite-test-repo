import React from 'react';

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
  footer?: React.ReactNode;
}

export const ContentCard: React.FC<ContentCardProps> = ({ title, children, variant = 'default', footer }) => {
  const baseClasses = 'p-4 rounded-lg border';
  const variantClasses = {
    default: 'bg-white border-gray-200',
    elevated: 'bg-white border-gray-200 shadow-md',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
      {footer && <div className="mt-3 pt-2 border-t text-sm text-gray-600">{footer}</div>}
    </div>
  );
};
