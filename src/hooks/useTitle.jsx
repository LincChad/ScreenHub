import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - ScreenHub`;
      });

  return null;
}

// Will change the title dynamically using the hooks from AllRoutes.
