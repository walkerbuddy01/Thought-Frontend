import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  authentication: boolean;
}

function AuthLayout({ children, authentication = false }: AuthLayoutProps) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.auth.login);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (authentication && isLoggedIn !== authentication) {

      return navigate("/signin");
    } else if (!authentication && isLoggedIn !== authentication) {
      return navigate("/blog");
    }

    setLoading(false);
  }, [navigate, isLoggedIn, authentication]);

  return loading ? <div>loading...</div> : <div>{children}</div>;
}

export default AuthLayout;
