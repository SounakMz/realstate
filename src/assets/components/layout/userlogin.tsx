import { useState } from "react";
import Input from "@mui/material/Input";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const ariaLabel = { "aria-label": "description" };

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ Username validation
  function validateUsername(value: string) {
    if (!value.trim()) {
      return "Username is required";
    }

    return "";
  }

  // ✅ Password validation
  function validatePassword(value: string) {
    if (!value.trim()) {
      return "Password is required";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  }

  // ✅ Full form validation
  function validate() {
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    const newErrors = {
      username: usernameError,
      password: passwordError,
    };

    setErrors(newErrors);

    return !usernameError && !passwordError;
  }

  // ✅ Login handler
  const handleLogin = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username,
          password,
          expiresInMins: 30,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const data = response.data;

      // ✅ Store real token
      localStorage.setItem("token", data.accessToken);

      // ✅ Navigate to dashboard
      navigate("/dashboard", { replace: true });

    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-wrap">

              {/* Username */}
              <div className="form-control text-center">
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    const value = e.target.value;

                    setUsername(value);

                    setErrors((prev) => ({
                      ...prev,
                      username: validateUsername(value),
                    }));
                  }}
                  inputProps={ariaLabel}
                />

                {errors.username && (
                  <p style={{ color: "red" }}>
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-control text-center">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;

                    setPassword(value);

                    setErrors((prev) => ({
                      ...prev,
                      password: validatePassword(value),
                    }));
                  }}
                  inputProps={ariaLabel}
                />

                {errors.password && (
                  <p style={{ color: "red" }}>
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-submit text-center">
                <button
                  className="btn"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Submit"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;