import { PlayPageCanvasGame } from "./screens/PlayPageCanvasGame";
import {
  ProdCanvasGameStoreProvider,
  useProdCanvasGameStore,
} from "./features/prod-canvas-game/prod-canvas-game.store";
import { ACTION_START_GAME_ID } from "./features/prod-canvas-game/prod-canvas-game.types";
import { currentPathname, isPlayRoutePath } from "./game/game-runtime";

function PlayRoute() {
  const { states, invokeAction } = useProdCanvasGameStore();

  return (
    <div
      data-setfarm-root="app"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-950 text-slate-100"
    >
      <PlayPageCanvasGame
        actions={{ "start-game-1": () => invokeAction(ACTION_START_GAME_ID) }}
        appState={states.STATE_APP_STATE}
        highScore={states.STATE_HIGH_SCORE}
      />
    </div>
  );
}

export default function App() {
  if (!isPlayRoutePath(currentPathname())) {
    return (
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        className="min-h-screen bg-slate-50 text-slate-950"
      />
    );
  }

  return (
    <ProdCanvasGameStoreProvider>
      <PlayRoute />
    </ProdCanvasGameStoreProvider>
  );
}
