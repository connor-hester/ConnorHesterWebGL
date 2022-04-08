// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
	handleBackground: (callback:any) => {
		return ipcRenderer.on('update-background', callback)
	},
	updatePositionXLeft: (callback: any) => ipcRenderer.on('update-position-x-l', callback),
	updatePositionXRight: (callback: any) => ipcRenderer.on('update-position-x-r', callback),
	writeRedLEDStatus: (value: 1|0) => {
		ipcRenderer.invoke('write:RedLEDStatus', value)
	},
	writeBlueLEDStatus: (value: 1|0) => {
		ipcRenderer.invoke('write:BlueLEDStatus', value)
	},
	// writeLEDBrightness:(brightness:number)=>{
	// 	ipcRenderer.invoke('write:LEDBrightness',brightness);
	// }
})