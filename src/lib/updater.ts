import { check } from "@tauri-apps/plugin-updater";
import { ask } from "@tauri-apps/plugin-dialog";

export default async function checkForAppUpdates() {
  const update = await check();

  if (update !== null && update?.available) {
    const yes = await ask(
      `Update to ${update.version} is available!\n\nRelease notes: ${update.body}`,
      {
        title: "Update Available",
        kind: "info",
        okLabel: "Update",
        cancelLabel: "Cancel",
      }
    );
    if (yes) {
      await update.downloadAndInstall();
    }
  }
}