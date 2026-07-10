import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import api from './axios';
import { useAuthStore } from '@/store/auth-store';

const roleMap: Record<string, "Patient" | "Dentist" | "Admin"> = {
  patient: "Patient",
  dentist: "Dentist",
  admin: "Admin",
  Patient: "Patient",
  Dentist: "Dentist",
  Admin: "Admin",
};

export const GoogleOneTapLogin = () => {
  const router = useRouter();
  const { checkAuth } = useAuthStore();

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const response = await api.post("/api/v1/auth/oauth/google/onetap", {
          token: credentialResponse.credential,
        });

        const resData = response.data?.data;
        if (resData && resData.user) {
          const apiUser = resData.user;
          const mappedRole = roleMap[apiUser.role] || "Patient";

          useAuthStore.setState({
            user: { id: apiUser.id, name: apiUser.name, email: apiUser.email, role: mappedRole },
            accessToken: resData.accessToken || "",
            refreshToken: resData.refreshToken || "",
            isAuthenticated: true,
            loading: false,
          });

          if (mappedRole === "Patient") router.push("/patient");
          else if (mappedRole === "Dentist") router.push("/dentist");
          else if (mappedRole === "Admin") router.push("/admin");
        } else {
          // Fallback: re-check auth from server then redirect
          await checkAuth();
          const { user } = useAuthStore.getState();
          if (user?.role === "Patient") router.push("/patient");
          else if (user?.role === "Dentist") router.push("/dentist");
          else if (user?.role === "Admin") router.push("/admin");
        }
      } catch (error) {
        console.error("Google One Tap login failed:", error);
      }
    },
    onError: () => {
      console.log('Google One Tap Login Failed');
    },
  });

  return null;
};