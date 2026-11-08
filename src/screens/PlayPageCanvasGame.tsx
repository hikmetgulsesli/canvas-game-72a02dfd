// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasGameActionId = "start-game-1";

export interface PlayPageCanvasGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasGameActionCallbacks = NonNullable<PlayPageCanvasGameProps["actions"]>;

export function PlayPageCanvasGame({ actions }: PlayPageCanvasGameProps) {
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="min-h-screen flex flex-col" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_HIGH_SCORE_PERSISTED OBS_START_GAME_STAYS_ON_PLAY_ROUTE">
          {/* Header / Navbar */}
          <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <div className="w-4 h-4 rounded-md border-2 border-slate-950 bg-transparent"></div>
                </div>
                <div>
                  <h1 className="text-base font-semibold tracking-tight text-white">Canvas Game</h1>
                  <p className="text-xs text-slate-400">Browser Arcade / Play Mode</p>
                </div>
              </div>
      
              <div className="flex items-center space-x-4">
                {/* Observable: High score status readout */}
                <div className="flex items-center space-x-2 bg-slate-800/70 border border-slate-700/60 rounded-lg px-3.5 py-1.5 shadow-sm" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_READOUT">
                  <span className="text-xs uppercase font-medium tracking-wider text-slate-400">High Score</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">0</span>
                </div>
      
                {/* Route badge */}
                <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-mono">Route: /play</span>
                </div>
              </div>
            </div>
          </header>
      
          {/* Main Content Grid */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Game Stage Column (3 cols) */}
            <section className="lg:col-span-3 space-y-4">
              {/* Contained Surface: SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="relative rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden aspect-[16/9] flex flex-col justify-between p-4" data-setfarm-element-ref="E000003">
                {/* Window chrome mockup (decorative) */}
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-800/70 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-slate-400">canvas-viewport (1280 × 720)</span>
                  </div>
                  <div className="font-mono text-xs text-slate-500">Status: Ready</div>
                </div>
      
                {/* Center Canvas Display Area */}
                <div className="flex-1 flex flex-col items-center justify-center my-6 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-xl border border-slate-800/60 bg-slate-950/70 backdrop-blur-sm max-w-sm">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                      <span className="font-mono text-lg font-bold">▶</span>
                    </div>
                    <h2 className="text-base font-medium text-white mb-1">Interactive Game Viewport</h2>
                    <p className="text-xs text-slate-400">Select Start Game to initiate game loop.</p>
                  </div>
                </div>
      
                {/* Bottom status line inside canvas wrapper */}
                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/70 pt-3">
                  <span>Engine: 2D Context Ready</span>
                  <span className="font-mono text-slate-500">Storage Key: PERSISTED_HIGH_SCORE</span>
                </div>
              </div>
            </section>
      
            {/* Sidebar Controls (1 col) */}
            <aside className="space-y-6">
              {/* Controls Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl space-y-5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Controls</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Launch the play session. The high score will be retained in local storage across browser reloads.
                  </p>
                </div>
      
                {/* Physical Control Slot: CSLOT_START_GAME_START_BUTTON */}
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-semibold text-sm shadow-lg shadow-emerald-500/25 transition duration-150 flex items-center justify-center space-x-2" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_START_BUTTON_STATE" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                  <span>Start Game</span>
                </button>
      
                {/* Observable: Game started status message */}
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 block mb-1.5 font-medium">Session Status</span>
                  <div className="flex items-center space-x-2.5 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300" data-setfarm-element-ref="E000005" role="status" aria-label="Game started" data-observable-refs="OBS_START_GAME_STARTED_STATUS_MESSAGE">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-medium text-emerald-400">Game started</span>
                  </div>
                </div>
              </div>
      
              {/* Rules & Target Contract Info (Non-actionable decorative container) */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Rules &amp; Target Contract</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800/50">
                    <span className="text-slate-500">Route</span>
                    <span className="font-mono text-slate-300">/play</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/50">
                    <span className="text-slate-500">High Score Initial</span>
                    <span className="font-mono text-slate-300">0</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">State</span>
                    <span className="text-emerald-400 font-medium">Ready</span>
                  </div>
                </div>
              </div>
            </aside>
          </main>
      
          {/* Footer (Non-actionable) */}
          <footer className="border-t border-slate-800/60 py-4 px-6 text-xs text-slate-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <span>Play Page — Canvas Game Environment</span>
              <span className="font-mono">Setfarm Contract Schema v2</span>
            </div>
          </footer>
        </div>
    </>
  );
}
