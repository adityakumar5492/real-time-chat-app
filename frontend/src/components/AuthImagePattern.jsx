const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 overflow-hidden">
      <div className="max-w-md text-center">

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl bg-primary/10 animate-float overflow-hidden"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {/* Moving Glow Inside Box */}
              <div className="absolute w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-70 animate-moveInside" />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>

      </div>
    </div>
  );
};

export default AuthImagePattern;