declare module "randomstring" {
  type options = object | number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  type cb = Function;
  const generate: (options: options, cb?: cb) => string;

  export {generate};
}
