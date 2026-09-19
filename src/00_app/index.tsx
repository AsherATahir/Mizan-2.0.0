import { Session } from "@supabase/supabase-js";
import { router, Href } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { supabase } from "../lib/supabase_dependencies/supabase";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);

  //TODO: Refactor overlay because a lot of it was rushed slop :(

  // const overlay = useLoadingOverlay();

  // Show the overlay immediately on cold start; the destination screen
  // (login or tabs) will dismiss it once it has painted.
  //useEffect(() => {
  //  overlay.show();
  //}, [overlay]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // redirect on session change
  useEffect(() => {
    if (session) {
      router.replace("/tabs" as Href); // Dashboard
    } else {
      router.replace("/login" as Href); // Auth screen
    }
  }, [session]);
}
