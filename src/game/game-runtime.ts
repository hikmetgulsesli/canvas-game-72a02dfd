import { createHighScoreRepository } from "../features/prod-canvas-game/prod-canvas-game.repo";
import {
  ROUTE_PLAY_ROUTE_ID,
  type AppState,
  type HighScoreState,
  type ProdCanvasGameStates,
} from "../features/prod-canvas-game/prod-canvas-game.types";

export const PLAY_ROUTE_ID = ROUTE_PLAY_ROUTE_ID;
export const PLAY_ROUTE_PATH = "/play";

export const INITIAL_APP_STATUS = "idle";

export function createInitialStates(
  repository = createHighScoreRepository(),
): ProdCanvasGameStates {
  const appState: AppState = { status: INITIAL_APP_STATUS };
  const highScore: HighScoreState = { value: repository.read() };
  return { STATE_APP_STATE: appState, STATE_HIGH_SCORE: highScore };
}

/**
 * The play surface is the application entry route, so it is mounted for the
 * root path as well as for its canonical `/play` path.
 */
export function isPlayRoutePath(pathname: string): boolean {
  return pathname === PLAY_ROUTE_PATH || pathname === "/" || pathname === "";
}

export function currentPathname(): string {
  if (typeof window === "undefined") return PLAY_ROUTE_PATH;
  return window.location.pathname || PLAY_ROUTE_PATH;
}
