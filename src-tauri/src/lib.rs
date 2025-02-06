mod ollama;

use ollama::{OllamaProcessState , start_ollama, stop_ollama};
use std::sync::Mutex;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_opener::init()).manage(OllamaProcessState {
            process: Mutex::new(None),
        })
        .invoke_handler(tauri::generate_handler![start_ollama, stop_ollama])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
