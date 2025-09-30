import { Button, ButtonProps } from "@mui/material";

export function PrimaryButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      {...rest}
      className="overflow-hidden"
    >
      <div className="overflow-hidden">
        <div className="absolute inset-0 -top-1 -bottom-1 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full animate-sheen" />
        {children}
      </div>
    </Button>
  );
}

export function SecondaryButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      size="large"
      sx={{
        color: "white",
        backgroundColor: "secondary.dark",
        "&:hover": {
          backgroundColor: "secondary.main",
        },
      }}
      {...rest}
    >
      <div className="overflow-hidden">{children}</div>
    </Button>
  );
}

export function LightButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button
      variant="outlined"
      color="secondary"
      size="large"
      {...rest}
      className="overflow-hidden"
      sx={{
        color: "white",
        backgroundColor: "rgba(46, 204, 113, 0.2)", // #2ECC71 @ 50%
        "&:hover": {
          backgroundColor: "rgba(46, 204, 113, 0.7)", // darker @ 70% for hover
        },
      }}
    >
      <div className="overflow-hidden">{children}</div>
    </Button>
  );
}

export function PremiumButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      {...rest}
      className="relative overflow-hidden rounded-lg bg-yellow-600 text-black hover:bg-yellow-500 transition-colors"
    >
      <div className="overflow-hidden">
        <div className="absolute inset-0 -top-1 -bottom-1 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full animate-sheen" />
        {children}
      </div>
    </Button>
  );
}
