import type { HighScoreRepository } from "../prod-canvas-game/prod-canvas-game.repo";
import {
  ACTION_START_GAME_ID,
  type AppState,
  type HighScoreState,
} from "../prod-canvas-game/prod-canvas-game.types";

export const START_GAME_ACTION_REF = ACTION_START_GAME_ID;

/** Literal state delta: STATE_HIGH_SCORE /value := 0 */
export const START_GAME_INITIAL_HIGH_SCORE = 0;

/** Literal state delta: STATE_APP_STATE /status := "playing" */
export const START_GAME_STATUS = "playing";

export interface StartGameOutcome {
  appState: AppState;
  highScore: HighScoreState;
}

/**
 * Applies the ACT_START_GAME contract:
 *  - STATE_APP_STATE.status  := "playing"
 *  - STATE_HIGH_SCORE.value  := 0
 *  - PERSIST_HIGH_SCORE_STORAGE write of STATE_HIGH_SCORE /value
 *
 * Navigation kind is `stay`, so no route change happens here.
 */
export function applyStartGame(repository: HighScoreRepository): StartGameOutcome {
  const highScore: HighScoreState = { value: START_GAME_INITIAL_HIGH_SCORE };
  repository.write(highScore.value);

  const appState: AppState = { status: START_GAME_STATUS };

  return { appState, highScore };
}
