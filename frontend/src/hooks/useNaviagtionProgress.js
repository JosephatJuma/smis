import React, { useEffect } from "react";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
function useNaviagtionProgress() {
  useEffect(() => {
    nprogress.complete();
  });
  return <NavigationProgress autoReset={true} />;
}

export default useNaviagtionProgress;
