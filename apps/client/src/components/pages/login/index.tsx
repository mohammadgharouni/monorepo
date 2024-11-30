import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { supabase } from "../../../supabase";

const prisma = new PrismaClient();

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    // Create user with Supabase Authentication
    const { data: user, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) {
      setLoading(false);
      setError("Error creating user: " + signupError.message);
      return;
    }

    // If user is created successfully, insert user into the database
    try {
      if (user) {
        // Add the user to your database
        await prisma.user.create({
          data: {
            email: user.email!,
            password: password, // In production, use hashed passwords
            name: name,
            roles: ["Doctor"], // Or use a dynamic role as per your application
            clinicId: "clinicId_example", // Ensure you pass a valid clinicId here
          },
        });
        alert("User created successfully");
      }
    } catch (error) {
      setLoading(false);
      setError("Error inserting user into the database: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto mt-10 max-w-lg rounded border p-5 shadow-lg">
      <h1 className="mb-5 text-2xl font-semibold">Sign Up</h1>
      {error && <p className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
