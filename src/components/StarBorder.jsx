const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'cyan',
  speed = '4s',
  thickness = 3,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-4xl ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 -bottom-2.75 right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 -top-2.5 left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}></div>
      <div
        className="relative z-1 bg-linear-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-4 px-6.5 rounded-4xl">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
