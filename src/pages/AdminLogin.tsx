import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // React Router hook to navigate programmatically

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://susnavabackend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert('Login failed: ' + (errorData.message || 'Unknown error'));
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (data.message) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');

        // Save token or user data here if needed
        // localStorage.setItem('token', data.token);

        // Redirect to admin dashboard using navigate
        navigate('/admin/dashboard');
      } else {
        alert('Login failed: ' + (data.message || 'Invalid credentials'));
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full mb-4 p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full mb-6 p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Button
          className="w-full bg-gradient-to-tr from-green-600 to-green-400 text-white font-semibold hover:brightness-110 transition"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
