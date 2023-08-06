"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b67797de-2856-4b9b-add8-6d928c5ca374");
  }, []);

  return null;
};
