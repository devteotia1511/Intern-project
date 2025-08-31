export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            For any queries regarding your Zudio ad campaigns, analytics, or billing, please reach out to our support team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-blue-600">support@parksmart.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone Support</h3>
              <p className="text-gray-600">+91 1800-123-4567</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Response Time</h3>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
