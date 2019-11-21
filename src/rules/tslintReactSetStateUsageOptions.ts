export const OPTION_UPDATER_ONLY = "updater-only";
export const OPTION_ALLOW_OBJECT = "allow-object";

export interface IOptions {
  readonly updaterOnly: boolean;
  readonly allowObject: boolean;
}

export function parseOptions(ruleArguments: any[]): IOptions {
  const updaterOnly = ruleArguments.find((arg: any) => arg === OPTION_UPDATER_ONLY);
  const allowObject = ruleArguments.find((arg: any) => arg === OPTION_ALLOW_OBJECT);

  return {
    updaterOnly,
    allowObject,
  };
}
