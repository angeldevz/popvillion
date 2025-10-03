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
    <Button variant="outlined" color="secondary" size="large" {...rest}>
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
      className=" relative 
    overflow-hidden 
    rounded-xl 
    px-6 py-3
    font-semibold tracking-wide
    text-black 
    bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
    shadow-[0_4px_12px_rgba(0,0,0,0.3)] 
    hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 
    transition-all duration-300"
    >
      <div className="overflow-hidden">
        <div
          className="  absolute inset-0 
        bg-gradient-to-r from-transparent via-white/50 to-transparent 
        skew-x-12 
        -translate-x-full 
        animate-[sheen_2s_infinite]"
        />
        {children}
      </div>
    </Button>
  );
}
