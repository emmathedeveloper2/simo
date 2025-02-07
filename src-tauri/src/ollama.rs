use std::{
    process::{Child, Command , Stdio},
    sync::Mutex,
};

use tauri::State;

pub struct OllamaProcessState {
    pub process: Mutex<Option<Child>>,
}

#[tauri::command]
pub fn start_ollama(state: State<OllamaProcessState>) -> Result<String, String> {
    let mut lock = state.process.lock().unwrap();

    // Ensure no existing process is running
    if lock.is_some() {
        return Err("ALREADY_RUNNING".into());
    }

    // Spawn the `ollama serve` process
    let child = Command::new("ollama")
        .arg("serve")
        .env("OLLAMA_ORIGINS", "*") // Set the environment variable
        .stdout(Stdio::null())
        .spawn()
        .map_err(|e| format!("Failed to start Ollama: {}", e))?;

    *lock = Some(child);

    Ok("SUCCESS".into())
}

#[tauri::command]
pub fn stop_ollama(state: State<OllamaProcessState>) -> Result<String, String> {
    let mut lock = state.process.lock().unwrap();

    if let Some(mut child) = lock.take() {
        match child.kill() {
            Ok(_) => Ok("Ollama stopped successfully.".into()),
            Err(e) => Err(format!("Failed to stop Ollama: {}", e)),
        }
    } else {
        Err("NO_PROCESS_RUNNING".into())
    }
}