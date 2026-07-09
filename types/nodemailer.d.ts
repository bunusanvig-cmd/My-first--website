declare module "nodemailer" {
  export type TransporterOptions = {
    host: string;
    port: number;
    secure?: boolean;
    auth?: {
      user: string;
      pass: string;
    };
  };

  export type SendMailOptions = {
    from?: string;
    to?: string;
    replyTo?: string;
    subject?: string;
    text?: string;
    html?: string;
  };

  export function createTransport(options: TransporterOptions): {
    sendMail(options: SendMailOptions): Promise<unknown>;
  };
}
