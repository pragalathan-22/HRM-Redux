import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee", // default role
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        switch (res.payload.role) {
          case "admin":
            navigate("/admin");
            break;
          case "manager":
            navigate("/manager");
            break;
          case "hr":
            navigate("/hr");
            break;
          default:
            navigate("/employee");
        }
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {isError && <p className="text-red-500">{message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full p-2 border mb-3 rounded"
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="hr">HR</option>
          <option value="employee">Employee</option>
        </select>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
