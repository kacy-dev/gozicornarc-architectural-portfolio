// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {

    const router = useRouter();

    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Login failed:", data);
                alert(data.message || "Login failed");
                return;
            }

            console.log("Login success:", data);

            // Example redirect after successful login
            router.push("/admin/dashboard");

        } catch (error) {
            console.error("Network error:", error);
            alert("Something went wrong. Please try again.");
        }
    };


    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-[#0f0f16]">
            {/* Left Section – Image / Watermark */}
            <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
                <img
                    src="/img/gozie-consult.jpg"
                    alt="Login background"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />

                {/* Watermark Text */}
                <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-6">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <span
                            key={i}
                            className="text-6xl xl:text-[100px] font-nosifer font-extrabold text-white rotate-[-15deg] m-6 select-none tracking-widest"
                        >
                            GOZICORNARC
                        </span>
                    ))}
                </div>

                {/* Branding */}
                {/* <div className="relative z-10 text-center px-12">
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">
            Gozicornarc Admin
          </h1>
          <p className="text-gray-300 text-lg">
            Manage projects, clients, and operations from one secure dashboard.
          </p>
        </div> */}
            </div>

            {/* Right Section – Login Form */}
            <div className="flex items-center justify-center px-6 sm:px-12 lg:px-20 bg-white relative">
                {/* Mobile Watermark */}
                <span className="absolute top-10 left-1/2 -translate-x-1/2 text-5xl font-extrabold text-gray-200 opacity-10 select-none lg:hidden">
                    GOZICORNARC
                </span>

                <div className="w-full space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                        <p className="text-gray-500 mt-2">
                            Sign in to access your admin dashboard.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Admin Email"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all shadow-md"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Gozicornarc. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
