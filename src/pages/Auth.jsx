import React, { useState } from "react";
import { login } from "../api/api";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      setMsg("Logged in (demo). Token saved in memory if needed.");
      console.log(res);
    } catch (err) {
      console.error(err);
      setMsg("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded">Login</button>
        </div>
      </form>
      {msg && <p className="mt-3 text-sm">{msg}</p>}
    </div>
  );
}
