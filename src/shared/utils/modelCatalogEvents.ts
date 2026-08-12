export const MODELS_UPDATED_EVENT = "omniroute:models-updated";

/**
 * Dispatch a browser-wide event to notify model dropdowns, catalog hooks, and
 * chat selectors that available models have changed (e.g. after a provider connection save/sync).
 */
export function notifyModelsUpdated(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(MODELS_UPDATED_EVENT));
  }
}
