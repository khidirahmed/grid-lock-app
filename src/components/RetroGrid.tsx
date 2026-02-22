const RetroGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bottom perspective grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%]" style={{ perspective: "800px" }}>
        <div
          className="retro-grid w-[200%] h-[200%] -ml-[50%] animate-grid-scroll origin-top"
          style={{
            transform: "rotateX(55deg)",
            transformOrigin: "center top",
          }}
        />
      </div>
      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(232 35% 18%) 80%)",
        }}
      />
    </div>
  );
};

export default RetroGrid;
