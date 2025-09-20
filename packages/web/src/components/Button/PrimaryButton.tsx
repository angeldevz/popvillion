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
