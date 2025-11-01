// Contact form submission API
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: number;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

// Backend API endpoint
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Submit contact form to backend
export const submitContactForm = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Log detailed error information
      console.error('Backend error response:', data);
      throw new Error(data.message || 'Failed to submit contact form');
    }

    return data;
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Check if it's a connection error
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      return {
        success: false,
        message: 'Backend server is not running. Please start the backend server first. Run: npm run backend'
      };
    }
    
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Sorry, there was an error sending your message. Please try again.'
    };
  }
};

// Alternative: Send email using EmailJS (client-side solution)
export const sendEmailWithEmailJS = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    // This would integrate with EmailJS service
    // You would need to install: npm install @emailjs/browser
    // And configure your EmailJS account
    
    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: 'bhavyadeva2329@gmail.com' // Your email
    };
    
    // EmailJS integration would go here
    // const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_PUBLIC_KEY');
    
    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.'
    };
  }
};
