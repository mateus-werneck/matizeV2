import { treatString } from '@Helpers/String';
import { ConsoleLogger } from '@nestjs/common';
import { appendFile, existsSync, mkdirSync, writeFileSync } from 'fs';

export class DatabaseLogger extends ConsoleLogger {
  private logFile: string;
  private logFolder: string;

  constructor() {
    super();
    this.generateLogFileName();
    this.createLogFile();
  }

  log(message: any, ...optionalParams: any[]) {
    const logMessage = `\n[INFO] ${new Date().toLocaleString()} - ${message}`;
    appendFile(this.logFile, logMessage, (error) => {});
  }

  error(message: any, ...optionalParams: any[]) {
    const logMessage = `\n[ERROR] ${new Date().toLocaleString()} - ${message}`;
    appendFile(this.logFile, logMessage, (error) => {});
  }

  warn(message: any, ...optionalParams: any[]) {
    const logMessage = `\n[WARNING] ${new Date().toLocaleString()} - ${message}`;
    appendFile(this.logFile, logMessage, (error) => {});
  }

  createLogFile(): void {
    !existsSync(this.logFolder) &&
      mkdirSync(this.logFolder, { recursive: true });
    !existsSync(this.logFile) &&
      writeFileSync(this.logFile, '', { encoding: 'utf-8' });
  }

  generateLogFileName(): void {
    const today = new Date().toISOString().split('T')[0];
    this.logFolder = `${treatString(process.env.LOG_PATH)}/${today}`;
    this.logFile = `${this.logFolder}/${today}_sql.log`;
  }
}
