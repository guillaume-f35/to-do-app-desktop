// preload.js

// Toutes les API Node.js sont disponibles dans le processus de préchargement.
// Il a la même sandbox qu'une extension Chrome.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
  
})

// tempo

const { contextBridge,ipcRenderer } = require('electron')

// script vers main
const rendererToMain ={
  nomLiaison: (message) => ipcRenderer.send("nomLiaison", message),
  mainToRenderer: () => ipcRenderer.invoke('mainToRenderer')
}
contextBridge.exposeInMainWorld('api', rendererToMain)