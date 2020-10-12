import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  log(message: string): void {
    const timeStamp: String = new Date().toLocaleTimeString();
    console.log(`${message} (${timeStamp})`);
  }
  eror(message: string): void {
    console.error(`ERROR: ${message}`);
  }
  constructor() {}
}
