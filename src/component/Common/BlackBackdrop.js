function BlackBackdrop({
  className,
  children,
  onCloseBlackBackdrop,
  ...others
}) {
  return (
    <div
      {...others}
      onClick={onCloseBlackBackdrop}
      className={`fixed top-0 left-0 w-full h-full bg-black/60 z-10 ${className}`}
    >
      {children}
    </div>
  );
}

export default BlackBackdrop;
