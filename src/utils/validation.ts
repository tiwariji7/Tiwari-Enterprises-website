export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  projectLocation: string;
  propertyType?: string;
  dimensions?: string;
  message: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateIndianPhone(phone: string): boolean {
  // Allow +91, 0, spaces, dashes, or plain 10 digits starting with 6, 7, 8, or 9
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  const digitsOnly = cleaned.startsWith('91') && cleaned.length === 12
    ? cleaned.slice(2)
    : cleaned.startsWith('0') && cleaned.length === 11
    ? cleaned.slice(1)
    : cleaned;

  return /^[6-9]\d{9}$/.test(digitsOnly);
}

export function validateEnquiryForm(data: Partial<EnquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!data.phone || !validateIndianPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit Indian phone number.';
  }

  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
  }

  if (!data.service || data.service === '') {
    errors.service = 'Please select the service required.';
  }

  if (!data.projectLocation || data.projectLocation.trim().length < 2) {
    errors.projectLocation = 'Please mention your project location in Pune or nearby areas.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide a brief description of your requirements (at least 10 characters).';
  }

  if (!data.consent) {
    errors.consent = 'Please confirm consent to be contacted for your project discussion.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

