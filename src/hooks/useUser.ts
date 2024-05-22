import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const { data: session, status } = useSession();
  useEffect(() => {
    setUser(session?.user || null);
  }, [session]);
  return { status, user };
};

export default useUser;
