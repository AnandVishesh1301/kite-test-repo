import React from 'react';

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
}

export function ContentCard({ title, children, variant = 'default' }: ContentCardProps) {
  const baseClasses = "border rounded-lg p-4";
  const variantClasses = {
    default: "shadow-sm",
    elevated: "shadow-lg"
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
