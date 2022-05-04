// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
	fireBullet: (callback:any) => {
		return ipcRenderer.on('fire-bullet', callback)
	},
	updateCactusX: (callback: any) => ipcRenderer.on('update-position-x', callback),
	// writeLEDStatus: (value: 1|0) => {
	// 	ipcRenderer.invoke('write:LEDStatus', value)
	// },
	// writeLEDBrightness: (brightness: number) => {
	// 	ipcRenderer.invoke('write:LEDBrightness', brightness)
	// }
})