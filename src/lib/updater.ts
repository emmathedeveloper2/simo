import { check } from "@tauri-apps/plugin-updater";
import { ask, message } from "@tauri-apps/plugin-dialog";

export default async function checkForAppUpdates(onUserClick: boolean) {
  const update = await check();
  if (update === null && onUserClick) {
    await message("There are no new updates available.", {
      title: "No Update Available",
      kind: "info",
      okLabel: "OK",
    });
    return;
  } else if (update?.available) {
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