import express, { Express } from 'express';

export default class App {
  private app: Express;
  constructor() {
    this.app = express();
  }

  public listen(port: number = 3000): Express {
    this.app.listen(port, () => {
      console.log(`App is up and running on: http://localhost:${port}`);
    });
    return this.app;
  }
}
