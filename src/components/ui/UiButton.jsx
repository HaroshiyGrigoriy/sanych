import { NavLink } from "react-router-dom";

export default function UiButton({
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const cls = `sn-btn sn-btn--${variant} sn-btn--${size} ${className}`.trim();

  if (to) return <NavLink to={to} className={cls} {...props}>{children}</NavLink>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;

  return (
    <button type="button" onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}
