export default function BrandCirclesBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* 🌈 BASE GLOW LAYER */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      
      <div className="absolute top-1/3 -right-52 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-blue-300/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

      {/* 🫧 FLOATING ORBS (SLOW DRIFT) */}
      <div className="absolute top-24 left-1/4 w-[140px] h-[140px] rounded-full bg-cyan-300/20 blur-2xl animate-bounce" />
      
      <div className="absolute bottom-32 right-1/4 w-[180px] h-[180px] rounded-full bg-blue-400/20 blur-2xl animate-[bounce_6s_infinite]" />

      <div className="absolute top-1/2 left-10 w-[100px] h-[100px] rounded-full bg-cyan-200/30 blur-xl animate-[ping_4s_infinite]" />

      {/* 🔵 MID LAYER DEPTH BLOBS */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />

      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />

      {/* ✨ CENTER GLOW FOCUS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] rounded-full bg-blue-400/5 blur-[120px] animate-[pulse_15s_ease-in-out_infinite]" />
      </div>

    </div>
  );
}