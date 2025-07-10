import { createContext, useContext, useState } from "react";

// ----------------------------------------------------------------------

type SnackbarContextType = {
  enqueueSnackbar: (message: string) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const enqueueSnackbar = (message: string) => {
    setSnackbar(message);
    setTimeout(() => setSnackbar(null), 3000);
  };

  return (
    <SnackbarContext.Provider value={{ enqueueSnackbar }}>
      {children}
      {snackbar && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#333",
            color: "white",
            padding: "12px 24px",
            borderRadius: 4,
            zIndex: 9999,
          }}
        >
          {snackbar}
        </div>
      )}
    </SnackbarContext.Provider>
  );
};
